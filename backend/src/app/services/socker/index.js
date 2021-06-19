"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = void 0;
const winston_1 = __importDefault(require("../../setting/winston"));
const _controller_1 = require("../../_controller");
const _function_1 = require("../../_function");
const { _console } = new winston_1.default();
class SocketService {
    start(io) {
        io.on("connection", (socket) => __awaiter(this, void 0, void 0, function* () {
            const jwt = new _function_1.Token();
            const token = socket.handshake.headers["x-token"];
            const { ok, message, data } = jwt.validar(token);
            new _controller_1.IndexController(socket, io);
            _console.error(token);
            socket.on("disconnect", (resp) => {
                if (typeof data === "undefined") {
                    io.disconnectSockets();
                    _console.error(`Se desconecto`);
                }
                else {
                    _console.error(`Se desconecto ${data.NOMBRE}`);
                }
            });
            if (ok) {
                socket.emit("my_info", {
                    ok,
                    message: `Hola ${data.NOMBRE}`,
                    data,
                });
                new _controller_1.SeccionController(socket, io, data);
                new _controller_1.ManodeObraController(socket, io, data);
                new _controller_1.BasesCostoController(socket, io, data);
                new _controller_1.CifController(socket, io, data);
            }
            else {
                socket.emit("my_info", {
                    ok,
                    message,
                    data: "login",
                });
                _console.error(message);
            }
            if (token === "null") {
                socket.disconnect();
                io.close();
            }
            //   if (token === "null") {
            //     return new IndexController(socket, io);
            //   } else {
            //     if (ok) {
            //       socket.emit("my_info", {
            //         ok,
            //         message: `Hola ${data.NOMBRE}`,
            //         data
            //       });
            //       _console.info(data.NOMBRE);
            //
            //     } else {
            //       socket.emit("my_info", {
            //         ok,
            //         message,
            //       });
            //     }
            // })
        }));
    }
}
exports.SocketService = SocketService;
//# sourceMappingURL=index.js.map