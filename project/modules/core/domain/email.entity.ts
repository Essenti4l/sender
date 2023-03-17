export /*bundle*/ interface EmailEntity {
	to: string | string[];
	from: string;
	subject: string;
	template: string;
	data: any;
}
