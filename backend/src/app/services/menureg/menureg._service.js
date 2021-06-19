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
exports.MenuregExpress = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const model = new _models_1.MenuregModel();
const seccionModel = new _models_1.SeccionModel();
const MenuregExpress = () => {
    const app = function_1.Router();
    // Consulta de opciones del menú dado un usuario
    app.post('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        data.USUARIO = req.my_data.USUARIO;
        function_1._console.info(JSON.stringify(req.my_data));
        const cons = yield model.cargue(data);
        function_1.r._200(res, cons);
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.MenuregExpress = MenuregExpress;
//# sourceMappingURL=menureg._service.js.map