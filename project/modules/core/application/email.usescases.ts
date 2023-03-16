import { EmailEntity } from '../domain/email.entity';

export class UsesCases {
	constructor(private readonly emailTransport) {}

	login = (credentials: { email: string; password: string; service: string }) => {
		try {
			this.emailTransport.login(credentials);
		} catch (error) {
			return { status: false, error };
		}
	};

	send = async (email: EmailEntity) => {
		try {
			const response = await this.emailTransport.send(email);
			if ('status' in response && !response.status) throw response.error;

			return { status: true };
		} catch (error) {
			return { status: false, error };
		}
	};
}
