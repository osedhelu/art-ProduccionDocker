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
exports.ProductosExpress = void 0;
const _function_1 = require("../../_function");
const ProductosExpress = () => {
    const app = _function_1.Router();
    app.get("/", _function_1.middlewareToken, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        //   console.log(req.my_data);
        //   const aa = await model.dominios({ id_unidad: "00" });
        _function_1.r._200(res, 'aa');
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.ProductosExpress = ProductosExpress;
//# sourceMappingURL=productos._service.js.map