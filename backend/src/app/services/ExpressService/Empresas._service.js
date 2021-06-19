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
exports.EmpresaExpress = void 0;
const _models_1 = require("../../_models");
const _function_1 = require("../../_function");
const model = new _models_1.PublicNodel();
const EmpresaExpress = () => {
    const app = _function_1.Router();
    app.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        const aa = yield model.listEmpresa({ id_unidad: "00" });
        _function_1.r._200(res, aa);
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.EmpresaExpress = EmpresaExpress;
//# sourceMappingURL=Empresas._service.js.map