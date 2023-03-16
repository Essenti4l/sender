export /*bundle*/ class Email {
	to: string;
	from: string;
	subject: string;
	body: any;

	constructor(email: { to: string; from: string; subject: string; body: any }) {
		this.to = email.to;
		this.from = email.from;
		this.subject = email.subject;
		this.body = email.body;
	}
}
