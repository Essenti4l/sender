import * as Handlebars from 'handlebars';

export class TemplateProcessor {
	compile = async (template: string, data: any): Promise<string> => {
		const compiledTemplate = Handlebars.compile(template);
		return compiledTemplate(data);
	};
}
