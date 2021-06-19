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
exports.cifExpress = void 0;
const interfaces_1 = require("../../interfaces");
const _models_1 = require("../../_models");
const _function_1 = require("../../_function");
const model = new _models_1.CifModel();
const cifExpress = () => {
    const app = _function_1.Router();
    app.get("/", _function_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const resp = yield model.list({ ID_UN: req.my_data.ID_UN });
        _function_1.r._200(res, resp);
    }));
    app.get('/manoObra', _function_1.middlewareToken, (req, res) => {
        interfaces_1._console.warn(JSON.stringify(req.my_data));
    });
    // TODO: Fin del Servicio
    return app;
};
exports.cifExpress = cifExpress;
//# sourceMappingURL=cif._service.js.map