import { MessageResponse } from "../../interfaces";
export declare class ManodeObraModel {
    private db;
    list(json: any): Promise<MessageResponse>;
    getUnidadMedidas(json: any): Promise<MessageResponse>;
}
