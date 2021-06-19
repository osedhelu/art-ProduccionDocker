import { Socket } from 'socket.io';
export declare class BasesCostoController {
    private socket;
    constructor(socket: Socket);
    ListDominios(): void;
    actualizarDominio(): void;
}
