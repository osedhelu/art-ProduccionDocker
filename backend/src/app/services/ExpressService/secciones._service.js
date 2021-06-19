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
exports.SeccionesService = void 0;
const _function_1 = require("../../_function");
const _models_1 = require("../../_models");
const SeccionesService = () => {
    const model = new _models_1.SeccionModel();
    const app = _function_1.Router();
    app.get("/", _function_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { ok, data, message } = yield model.listSeccion({ ID_UN: req.my_data.ID_UN });
            if (ok) {
                const treeData = _function_1.TreeListFunction({
                    idKey: "ITEM",
                    parentKey: "ANTERIOR",
                    childrenKey: "items",
                    xdata: data,
                });
                _function_1.r._200(res, treeData);
            }
            else {
                _function_1.r._400(res, message);
            }
        }
        catch (err) {
            _function_1.r._400(res, err);
        }
    }));
    app.get('/empleado/:id', _function_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { data } = yield model.listEmpleados({ ID_SECCION: id, ID_UN: req.my_data.ID_UN });
            _function_1.r._200(res, data);
        }
        catch (error) {
            _function_1.r._400(res, error);
        }
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.SeccionesService = SeccionesService;
//# sourceMappingURL=secciones._service.js.map