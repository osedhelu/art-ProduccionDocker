import { Socket } from 'socket.io';
import { UsuarioSchema } from '../interfaces';
import { SeccionModel } from '../_models';
export declare class SeccionController {
    private socket;
    private io;
    model: SeccionModel;
    constructor(socket: Socket, io: Socket, user: UsuarioSchema);
    allSeccion(): Promise<void>;
    allEmpleados(): void;
    EditSeccion(): {
        ok: boolean;
    };
    ListSeccion(): void;
}
