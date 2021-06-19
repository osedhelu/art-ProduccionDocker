"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cors = void 0;
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = require("express");
const cors = (app) => {
    app.use((req, res, next) => {
        (req._400 = (error) => {
            return res.status(400).json({
                ok: false,
                error,
            });
        }),
            res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, token');
        next();
    });
    app.use(express_1.json());
    app.use(body_parser_1.default.urlencoded({ extended: true }));
    app.use(body_parser_1.default.json());
};
exports.cors = cors;
//# sourceMappingURL=cors.middleware.js.map