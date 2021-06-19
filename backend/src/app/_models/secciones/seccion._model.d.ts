import { MessageResponse } from '../../interfaces';
export declare class SeccionModel {
    listSeccion(json: any): Promise<MessageResponse>;
    listEmpleados(json: any): Promise<MessageResponse>;
    Edit(json: any): Promise<MessageResponse>;
    add(json: any): Promise<MessageResponse>;
}
