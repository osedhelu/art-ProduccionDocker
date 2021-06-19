import { Socket } from "socket.io";
import { UsuarioSchema } from "../../interfaces";
export declare class BasesCostoController {
    private socket;
    private io?;
    constructor(socket: Socket, io?: Socket<import("socket.io/dist/typed-events").DefaultEventsMap, import("socket.io/dist/typed-events").DefaultEventsMap> | undefined, user?: UsuarioSchema);
    ListDominios(): void;
    actualizarDominio(): void;
}
