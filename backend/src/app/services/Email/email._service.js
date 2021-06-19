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
exports.EmailService = void 0;
const function_1 = require("../../function");
const _models_1 = require("../../_models");
const model = new _models_1.EmailModel();
const EmailService = () => {
    const app = function_1.Router();
    app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body);
        const { tipo_producto, Nombre_producto, url } = req.body;
        const log = {
            nombre: req.headers.title,
            pass: req.headers.pass,
            user: req.headers.user,
        };
        const correos = req.body.to;
        const arr = correos.split(',');
        arr.forEach((resp) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(resp);
            const emit = {
                subject: req.body.subject,
                text: req.body.text,
                to: resp,
                tipo_producto,
                Nombre_producto,
                url,
            };
            yield model.enviar(log, emit);
        }));
        function_1.r._200(res, 'que paso');
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.EmailService = EmailService;
//# sourceMappingURL=email._service.js.map