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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManodeObraController = void 0;
const _models_1 = require("../_models");
const model = new _models_1.ManodeObraModel();
class ManodeObraController {
    constructor(socket, io, user) {
        this.socket = socket;
        this.io = io;
        this.Listar();
        this.ListMedidas();
    }
    Listar() {
        this.socket.on('ManoDeObra', (resp, callback) => __awaiter(this, void 0, void 0, function* () {
            const aa = yield model.list(resp);
            callback(aa);
        }));
    }
    ListMedidas() {
        this.socket.on('UnidadMedidas', (data, callback) => __awaiter(this, void 0, void 0, function* () {
            const bb = yield model.getUnidadMedidas(data);
            callback(bb);
        }));
    }
}
exports.ManodeObraController = ManodeObraController;
//# sourceMappingURL=ManoObra.controller.js.map