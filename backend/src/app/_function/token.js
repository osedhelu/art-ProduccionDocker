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
Object.defineProperty(exports, "__esModule", { value: true });
exports.middlewareToken = exports.Token = void 0;
const jwt = __importStar(require("jsonwebtoken"));
const _1 = require(".");
const env_1 = require("../../../env");
const { SEED_TOKEN } = new env_1.Env();
class Token {
    constructor() {
        this.semilla = SEED_TOKEN;
    }
    validar(token) {
        return jwt.verify(token, this.semilla, (err, data) => {
            if (err) {
                return { ok: false, message: "Este roken no es valido" };
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
const middlewareToken = (req, res, next) => {
    let token = req.headers.token;
    jwt.verify(token, SEED_TOKEN, (err, decode) => {
        if (err) {
            return _1.r._401(res, err);
        }
        else {
            req.my_data = decode;
            next();
        }
    });
};
exports.middlewareToken = middlewareToken;
//# sourceMappingURL=token.js.map