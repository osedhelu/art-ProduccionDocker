"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpressUsers = void 0;
const interfaces_1 = require("../../interfaces");
const _function_1 = require("../../_function");
const ExpressUsers = (app) => {
    app.post("/", (req, res, next) => {
        interfaces_1._console.error(req.body);
        _function_1.r._200(res, { ok: true });
    });
    return app;
};
exports.ExpressUsers = ExpressUsers;
//# sourceMappingURL=user.express.js.map