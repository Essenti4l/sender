export interface TemplateProcessor {
	compile: (template: string, data: any) => void;
}
