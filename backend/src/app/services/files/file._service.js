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
exports.filesExpress = void 0;
const express_1 = require("express");
const node_console_1 = require("node:console");
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const filesExpress = () => {
    const app = express_1.Router();
    app.get('/:carpeta/:img', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { carpeta, img } = req.params;
        const file = path_1.default.resolve('.');
        node_console_1.log(`${file}/img/${carpeta}/${img}`);
        const imgPath = `${file}/img/${carpeta}/${img}`;
        fs_1.default.readFile(imgPath, function (err, data) {
            if (err)
                throw err;
            res.end(data);
        });
        //fs.;
    }));
    // TODO: Fin del Servicio
    return app;
};
exports.filesExpress = filesExpress;
//# sourceMappingURL=file._service.js.map