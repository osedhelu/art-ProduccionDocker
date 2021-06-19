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
    app.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const log = {
            user: req.headers.user,
            pass: req.headers.pass,
            nombre: req.headers.title
        };
        const emit = {
            subject: `${req.body.subject}`,
            text: req.body.text,
            to: req.body.to,
            url: '',
            tipo_producto: '',
            Nombre_producto: ''
        };
        // console.log(log,'---------------------',emit)
        yield model.enviar(log, emit);
        function_1.r._200(res, `Se envio el correo a ${emit.to}`);
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.EmailService = EmailService;
//# sourceMappingURL=email._service.js.map