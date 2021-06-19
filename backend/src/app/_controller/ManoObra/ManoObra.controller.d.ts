import { Socket } from "socket.io";
import { UsuarioSchema } from "../../interfaces";
export declare class ManodeObraController {
    private socket;
    private io;
    constructor(socket: Socket, io: Socket, user: UsuarioSchema);
    Listar(): void;
    ListMedidas(): void;
}
