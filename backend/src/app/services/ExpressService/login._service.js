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
exports.loginExpress = void 0;
const _models_1 = require("../../_models");
const _function_1 = require("../../_function");
const loginExpress = () => {
    const modelPublic = new _models_1.PublicNodel();
    const app = _function_1.Router();
    app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const seccion = yield modelPublic.initSeccion(req.body);
            _function_1.r._200(res, seccion);
        }
        catch (error) {
            return req._400(res, error);
        }
    }));
    app.get("/auth", _function_1.middlewareToken, (req, res) => {
        _function_1.r._200(res, { ok: true });
    });
    return app;
};
exports.loginExpress = loginExpress;
//# sourceMappingURL=login._service.js.map