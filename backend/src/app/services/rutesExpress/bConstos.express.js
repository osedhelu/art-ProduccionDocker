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
exports.BconstoExpress = void 0;
const interfaces_1 = require("../../interfaces");
const Bcosto_model_1 = require("../../_controller/BasesCostos/Bcosto.model");
const _function_1 = require("../../_function");
const model = new Bcosto_model_1.BasesCostoModel();
const BconstoExpress = (app) => {
    app.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
        interfaces_1._console.error(JSON.stringify(req.body));
        const aa = yield model.dominios({ id_unidad: "00" });
        _function_1.r._200(res, aa);
    }));
    return app;
};
exports.BconstoExpress = BconstoExpress;
//# sourceMappingURL=bConstos.express.js.map