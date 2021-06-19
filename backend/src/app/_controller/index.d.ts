import { Socket } from 'socket.io';
export * from './public.controller';
export * from './Seccion.controller';
export * from './Bconsto.controller';
export * from './ManoObra.controller';
export * from './cif.controller';
declare class IndexController {
    socket: Socket;
    io: Socket;
    constructor(socket: Socket, io: Socket);
}
export { IndexController };
