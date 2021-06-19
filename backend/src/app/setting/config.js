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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitService = void 0;
const express_1 = __importDefault(require("express"));
const interfaces_1 = require("../interfaces");
const function_1 = require("../function");
const middleware_1 = require("../middleware");
class InitService {
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const app = express_1.default();
            middleware_1.cors(app);
            function_1.ExpresService(app);
            app.listen(interfaces_1.env.PORT, () => {
                function_1._console.info(`Servidor Corriendo en el puerto ${interfaces_1.env.PORT}`);
            });
        });
    }
}
exports.InitService = InitService;
//# sourceMappingURL=config.js.map