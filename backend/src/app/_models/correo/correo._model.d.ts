import { Emit, Login } from '../../interfaces';
export declare class EmailModel {
    enviar(login: Login, emit: Emit): Promise<void>;
}
