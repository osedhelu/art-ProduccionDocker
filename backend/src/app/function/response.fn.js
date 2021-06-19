"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.r = void 0;
exports.r = {
    _400: (res, error) => {
        return res.status(400).json({
            ok: false,
            error,
        });
    },
    _200: (res, data) => {
        return res.status(200).json(data);
    },
    _201: (res, data) => {
        return res.status(201).json({
            ok: true,
            data,
        });
    },
    _401: (res, error) => {
        return res.status(401).json({
            ok: false,
            error,
        });
    },
    _500: (res, error) => {
        return res.status(500).json({
            ok: false,
            error,
        });
    },
    _message: (res, message) => {
        return res.status(200).json({
            message,
        });
    },
};
//# sourceMappingURL=response.fn.js.map