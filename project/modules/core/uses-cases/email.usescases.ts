import { EmailEntity } from '../entities/email.entity';
import { TemplateProcessor } from '../helpers/template.processor';
import { TransportRepository } from '../repositories/transport.repository';

export class UsesCases {
	constructor(
		private readonly emailTransport: TransportRepository,
		private readonly templateProcessor: TemplateProcessor
	) {}

	login = (credentials: { [key: string]: any }, opts: any) => {
		try {
			this.emailTransport.login(credentials, opts);
		} catch (error) {
			return { status: false, error };
		}
	};

	send = async (email: EmailEntity) => {
		try {
			const template = await this.templateProcessor.compile(email.template, email.data);

			const response = await this.emailTransport.send({ ...email, template });
			if ('status' in response && !response.status) throw response.error;

			return { status: true };
		} catch (error) {
			return { status: false, error };
		}
	};
}
