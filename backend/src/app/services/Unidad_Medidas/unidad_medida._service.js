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
exports.UmedidaExpress = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const UmedidaExpress = () => {
    const model = new _models_1.ManodeObraModel();
    const app = function_1.Router();
    app.post('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            function_1.r._200(res, yield model.getUnidadMedidas({ ID_UN: req.my_data.ID_UN }));
        }
        catch (error) {
            function_1._console.error(`unidad_medida._service _lin: 15 ==>>> ${JSON.stringify(error)}`);
            function_1.r._400(res, error);
        }
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.UmedidaExpress = UmedidaExpress;
//# sourceMappingURL=unidad_medida._service.js.map