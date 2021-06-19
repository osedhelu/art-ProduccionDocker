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
exports.PublicNodel = void 0;
const conexion_1 = require("../../db/conexion");
const winston_1 = __importDefault(require("../../setting/winston"));
const _function_1 = require("../../_function");
const { _console } = new winston_1.default();
class PublicNodel extends conexion_1.DbService {
    listEmpresa(json) {
        return __awaiter(this, void 0, void 0, function* () {
            const aa = yield this.SQLConsult({ action: "get_empresa", json });
            return aa;
        });
    }
    initSeccion(emit) {
        return __awaiter(this, void 0, void 0, function* () {
            console.error(emit);
            const password = emit.password;
            emit.password = "";
            const info = yield this.SQLConsult({ action: "login", json: emit });
            const user = info.data;
            if (!info.data) {
                return {
                    ok: false,
                    message: "el usuario no existe -- cc",
                };
            }
            else {
                const validate = new _function_1.PassFn();
                const acti = validate.comprar(password, user.CLAVE_SECUNDARIA);
                if (!acti) {
                    return {
                        ok: false,
                        message: "el usuario no existe -- password",
                    };
                }
                else {
                    const jwt = new _function_1.Token();
                    user.CLAVE_SECUNDARIA = "";
                    return {
                        ok: true,
                        data: user,
                        token: jwt.generarToken(user),
                    };
                }
            }
        });
    }
}
exports.PublicNodel = PublicNodel;
//# sourceMappingURL=public.model.js.map