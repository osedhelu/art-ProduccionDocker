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
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const _models_1 = require("../../_models");
const SeccionesService = () => {
    const model = new _models_1.SeccionModel();
    const app = function_1.Router();
    app.get('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { ok, data, message } = yield model.listSeccion({
                ID_UN: req.my_data.ID_UN,
            });
            if (ok) {
                const treeData = function_1.TreeListFunction({
                    idKey: 'ITEM',
                    parentKey: 'ANTERIOR',
                    childrenKey: 'items',
                    xdata: data,
                });
                function_1.r._200(res, treeData);
            }
            else {
                function_1.r._400(res, message);
            }
        }
        catch (err) {
            function_1.r._400(res, err);
        }
    }));
    app.get('/empleado/:id', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const { data } = yield model.listEmpleados({
                ID_SECCION: id,
                ID_UN: req.my_data.ID_UN,
            });
            function_1.r._200(res, data);
        }
        catch (error) {
            function_1.r._400(res, error);
        }
    }));
    app.post('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const json = req.body;
            const data = yield model.add(json);
            function_1.r._200(res, { ok: true, data });
        }
        catch (err) {
            function_1._console.error(JSON.stringify(err));
            function_1.r._401(res, err);
        }
    }));
    app.put('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const json = req.body;
            const data = yield model.Edit(json);
            function_1.r._200(res, { ok: true, data });
        }
        catch (err) {
            function_1._console.error(JSON.stringify(err));
            function_1.r._401(res, err);
        }
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.SeccionesService = SeccionesService;
//# sourceMappingURL=secciones._service.js.map