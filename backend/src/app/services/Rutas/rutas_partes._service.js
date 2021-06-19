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
exports.DominiosExpress = void 0;
const middleware_1 = require("../../middleware");
const express_1 = require("express");
const function_1 = require("../../function");
const DominiosExpress = () => {
    const app = express_1.Router();
    app.get('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        function_1.r._200(res, 'example');
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.DominiosExpress = DominiosExpress;
//# sourceMappingURL=rutas_partes._service.js.map