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
exports.Router = exports.r = exports.TreeListFunction = void 0;
__exportStar(require("./token"), exports);
__exportStar(require("./bcryptjs"), exports);
const express_1 = require("express");
Object.defineProperty(exports, "Router", { enumerable: true, get: function () { return express_1.Router; } });
__exportStar(require("./token"), exports);
__exportStar(require("../interfaces"), exports);
const TreeListFunction = ({ xdata, idKey, parentKey, childrenKey, }) => {
    const data = JSON.parse(JSON.stringify(xdata));
    const ID_KEY = idKey || "id";
    const PARENT_KEY = parentKey || "parent";
    const CHILDREN_KEY = childrenKey || "children";
    // const item, id, parentId;
    const map = {};
    for (let i = 0; i < data.length; i++) {
        // make cache
        if (data[i][ID_KEY]) {
            map[data[i][ID_KEY]] = data[i];
            data[i][CHILDREN_KEY] = [];
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i][PARENT_KEY]) {
            // is a child
            if (map[data[i][PARENT_KEY]]) {
                // for dirty data
                map[data[i][PARENT_KEY]][CHILDREN_KEY].push(data[i]); // add child to parent
                data.splice(i, 1); // remove from root
                i--; // iterator correction
            }
            else {
                data[i][PARENT_KEY] = 0; // clean dirty data
            }
        }
    }
    return data;
};
exports.TreeListFunction = TreeListFunction;
const r = {
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
exports.r = r;
//# sourceMappingURL=index.js.map