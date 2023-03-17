import { UsesCases } from '../application/email.usescases';
import { EmailTransport } from './email.transport';
import { TemplateProcessor } from './template.processor';

const transport = new EmailTransport();
const processor = new TemplateProcessor();
export /*bundle*/ const sender = new UsesCases(transport, processor);
