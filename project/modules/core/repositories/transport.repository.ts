import { EmailEntity } from '../entities/email.entity';

export interface TransportRepository {
	login(credentials: { [key: string]: any }, opts: any): void;
	send(email: EmailEntity): Promise<{ status: boolean; error?: string }>;
}
