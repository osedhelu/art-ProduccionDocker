"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressUsers = void 0;
const _models_1 = require("../../_models");
const function_1 = require("../../function");
const express_1 = require("express");
const ExpressUsers = () => {
    const modelPublic = new _models_1.PublicNodel();
    const app = express_1.Router();
    app.post('/', (req, res, next) => {
        function_1._console.error(JSON.stringify(req.body));
        // let
        function_1.r._200(res, { ok: true });
    });
    return app;
};
exports.ExpressUsers = ExpressUsers;
//# sourceMappingURL=user._service.js.map