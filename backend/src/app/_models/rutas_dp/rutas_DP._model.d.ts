import { MessageResponse } from "../../interfaces";
export declare class RutasModel {
    private db;
    consulta(json: any): Promise<MessageResponse>;
    idruta(json: any): Promise<MessageResponse>;
    new(json: any): Promise<MessageResponse>;
    update(json: any): Promise<MessageResponse>;
    delete(json: any): Promise<MessageResponse>;
    qsecciones(json: any): Promise<MessageResponse>;
}
