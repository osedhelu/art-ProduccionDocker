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
exports.CifController = void 0;
const function_1 = require("../function");
const _models_1 = require("../_models");
class CifController {
    constructor(socket, io, user) {
        this.socket = socket;
        this.io = io;
        this.model = new _models_1.CifModel();
        this.list();
    }
    list() {
        this.socket.on('ListCif', (data, callback) => __awaiter(this, void 0, void 0, function* () {
            function_1._console.error(data);
            const aa = yield this.model.list(data);
            callback(aa);
        }));
    }
}
exports.CifController = CifController;
//# sourceMappingURL=cif.controller.js.map