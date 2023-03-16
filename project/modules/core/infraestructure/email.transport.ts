import * as nodemailer from 'nodemailer';
import { Email } from '../domain/email.value';

export class EmailTransport {
	private email: string;
	private password: string;
	private service: string;

	login(credentials: { email: string; password: string; service: string }) {
		this.email = credentials.email;
		this.password = credentials.password;
		this.service = credentials.service;
	}

	async send(email: Email) {
		try {
			const transporter = nodemailer.createTransport({
				service: this.service,
				auth: {
					user: this.email,
					pass: this.password,
				},
			});

			const response = await transporter.sendMail({
				from: email.from,
				to: email.to,
				subject: email.subject,
				...email.body,
			});

			if ('error' in response) throw response;
			return { status: true };
		} catch (error) {
			return { status: false, error };
		}
	}
}
