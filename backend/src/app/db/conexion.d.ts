import { SqlInterface } from '../interfaces/sql';
import { MessageResponse } from '../interfaces/sockerResp';
export declare class DbService {
    SQLConsult(prmproc: SqlInterface, proc?: string, type?: string): Promise<MessageResponse>;
}
