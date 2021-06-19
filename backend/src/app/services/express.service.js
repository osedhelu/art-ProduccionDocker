"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutesExpress_1 = require("./rutesExpress");
class ExpresService {
    constructor(app) {
        this.app = app;
        app.use("/login", rutesExpress_1.ExpressUsers(express_1.Router()));
        app.use("/bcostos", rutesExpress_1.BconstoExpress(express_1.Router()));
        app.use("/admin", rutesExpress_1.ExpressUsers(express_1.Router()));
    }
}
exports.default = ExpresService;
//# sourceMappingURL=express.service.js.map