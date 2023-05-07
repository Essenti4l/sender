import * as Handlebars from 'handlebars';

export class TemplateProcessor {
	compile = async (template: string, data: any): Promise<string> => {
		const compiledTemplate = Handlebars.compile(template);
		return compiledTemplate(data);
	};

	// Here goes the other logic, header, footer, etc, etc, etc, etc, etc, i leave it ready for you :))
}
