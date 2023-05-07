import { UsesCases } from './uses-cases/email.usescases';
import { EmailTransport } from './helpers/email.transport';
import { TemplateProcessor } from './helpers/template.processor';

const transport = new EmailTransport();
const processor = new TemplateProcessor();
export /*bundle*/ const sender = new UsesCases(transport, processor);
