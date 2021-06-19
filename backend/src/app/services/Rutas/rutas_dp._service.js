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
exports.RutasdpExpress = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const model = new _models_1.RutasModel();
const seccionModel = new _models_1.SeccionModel();
const RutasdpExpress = () => {
    const app = function_1.Router();
    // consulta
    app.post('/consulta', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        function_1._console.info(JSON.stringify(data));
        const cons = yield model.consulta(data);
        function_1.r._200(res, cons);
    }));
    // consulta por una ruta determinada
    app.get('/ruta/:IdRuta', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const IdRuta = req.params.IdRuta;
        function_1._console.info(IdRuta);
        const cons = yield model.idruta({ ID_RUTA: IdRuta });
        function_1.r._200(res, cons);
    }));
    // new
    app.post('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        function_1._console.info(JSON.stringify(data));
        const cons = yield model.new(data);
        function_1.r._200(res, cons);
    }));
    // update
    app.put('/', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        function_1._console.info(JSON.stringify(data));
        const cons = yield model.update(data);
        function_1.r._200(res, cons);
    }));
    // delete
    app.get('/ruta/delete/:IdRuta', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const IdRuta = req.params.IdRuta;
        function_1._console.info(IdRuta);
        const cons = yield model.delete({ ID_RUTA: IdRuta });
        function_1.r._200(res, cons);
    }));
    // qsecciones
    app.get('/qsecciones', middleware_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const cons = yield model.qsecciones({ FILTRO: '' });
        function_1.r._200(res, cons);
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.RutasdpExpress = RutasdpExpress;
//# sourceMappingURL=rutas_dp._service.js.map