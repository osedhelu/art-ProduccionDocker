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
exports.AplicationEExpress = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const model = new _models_1.AplicationsModel();
const AplicationEExpress = () => {
    const app = function_1.Router();
    app.get('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { ID_UN, USUARIO } = req.my_data;
        const { data, ok, message } = yield model.misAplications({
            ID_UN,
            usuario: USUARIO,
        });
        if (ok) {
            const nueva = data.map((resp) => {
                return {
                    parentKey: resp.ID_APLICACION_PADRE,
                    idKey: resp.ID_APLICACION,
                    icon: 'filter',
                    path: `/${resp.ID_APLICACION}`,
                    text: resp.NOMBRE,
                };
            });
            const bb = function_1.TreeListFunction({
                xdata: nueva,
                childrenKey: 'items',
                parentKey: 'parentKey',
                idKey: 'idKey',
            });
            function_1.r._200(res, bb[0].items);
        }
        else {
            function_1.r._401(res, message);
        }
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.AplicationEExpress = AplicationEExpress;
//# sourceMappingURL=aplication._service.js.map