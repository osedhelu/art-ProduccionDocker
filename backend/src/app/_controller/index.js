"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IndexController = void 0;
const public_controller_1 = require("./public.controller");
__exportStar(require("./public.controller"), exports);
__exportStar(require("./Seccion.controller"), exports);
__exportStar(require("./Bconsto.controller"), exports);
__exportStar(require("./ManoObra.controller"), exports);
__exportStar(require("./cif.controller"), exports);
class IndexController {
    constructor(socket, io) {
        this.socket = socket;
        this.io = io;
        new public_controller_1.PublicController(socket);
    }
}
exports.IndexController = IndexController;
//# sourceMappingURL=index.js.map