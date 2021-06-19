import { MessageResponse } from '../../interfaces';
export declare class CifModel {
    private db;
    list(json: any): Promise<MessageResponse>;
    EditCif(json: any): Promise<MessageResponse>;
}
