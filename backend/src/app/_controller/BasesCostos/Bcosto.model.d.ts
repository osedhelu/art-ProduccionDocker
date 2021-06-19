import { BcostoUpdate, MessageResponse } from "../../interfaces";
export declare class BasesCostoModel {
    private db;
    dominios(json: any): Promise<MessageResponse>;
    updateDominio(json: BcostoUpdate): Promise<MessageResponse>;
}
