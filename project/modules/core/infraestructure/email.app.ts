import { UsesCases } from '../application/email.usescases';
import { EmailTransport } from './email.transport';

const transport = new EmailTransport();
export /*bundle*/ const sender = new UsesCases(transport);
