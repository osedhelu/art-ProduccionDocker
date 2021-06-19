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
exports.PublicController = void 0;
const _models_1 = require("../_models");
const model = new _models_1.PublicNodel();
class PublicController {
    constructor(socket) {
        this.socket = socket;
        socket.on('list_empresa', (emit, callback) => __awaiter(this, void 0, void 0, function* () {
            try {
                // console.log(emit);
                const { ok, data, message } = yield model.listEmpresa(emit);
                if (ok) {
                    callback({ ok, data });
                }
                else {
                    callback({ ok, message });
                }
            }
            catch (erro) {
                callback({ ok: false, message: erro });
            }
        }));
        socket.on('loginSeccion', (resp, callback) => __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield model.initSeccion(resp);
                callback(data);
            }
            catch (error) {
                callback({ ok: false, message: error });
            }
        }));
    }
}
exports.PublicController = PublicController;
//# sourceMappingURL=public.controller.js.map