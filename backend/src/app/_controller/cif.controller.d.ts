import { Socket } from 'socket.io';
import { UsuarioSchema } from '../interfaces';
import { CifModel } from '../_models';
export declare class CifController {
    private socket;
    private io;
    model: CifModel;
    constructor(socket: Socket, io: Socket, user: UsuarioSchema);
    private list;
}
