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
exports.ManoObraExpress = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const model = new _models_1.ManodeObraModel();
const ManoObraExpress = () => {
    const app = function_1.Router();
    app.get('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            return function_1.r._200(res, yield model.list({ ID_UN: req.my_data.ID_UN }));
        }
        catch (err) {
            return function_1.r._400(res, err);
        }
    }));
    app.post('', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
        }
        catch (err) {
        }
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.ManoObraExpress = ManoObraExpress;
//# sourceMappingURL=manoObra._service.js.map