"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._console = exports.Token = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const _1 = require(".");
const winston_1 = __importDefault(require("../setting/winston"));
class Token {
    constructor() {
        this.semilla = _1.env.SEED_TOKEN;
    }
    validar(token) {
        return jwt.verify(token, this.semilla, (err, data) => {
            if (err) {
                return { ok: false, message: 'Este roken no es valido' };
            }
            return {
                ok: true,
                data,
            };
        });
    }
    generarToken(data) {
        return jwt.sign(data, this.semilla, { expiresIn: 10080 });
    }
}
exports.Token = Token;
exports._console = new winston_1.default()._console;
//# sourceMappingURL=token.js.map