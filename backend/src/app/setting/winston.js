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
const winston = __importStar(require("winston"));
class WinstonLog {
    constructor() {
        this.winston = winston;
        const { format, transports } = this.winston;
        const logFormat = format.printf((info) => {
            if (info.level === 'info') {
                return `${info.timestamp} \x1b[34m${info.level}\x1b[0m:  \n\x1b[44m\x1b[30m${info.message}\x1b[0m`;
            }
            if (info.level === 'error') {
                return `${info.timestamp} \x1b[31m${info.level}\x1b[0m: \n\x1b[41m${info.message}\x1b[0m`;
            }
            if (info.level === 'debug') {
                return `${info.timestamp} \x1b[33m\x1b[30m${info.level}\x1b[0m: \n\x1b[42m\x1b[30m${info.message}\x1b[0m`;
            }
            if (info.level === 'warn') {
                return `${info.timestamp} \x1b[32m${info.level}\x1b[0m: \n\x1b[42m\x1b[30m${info.message}\x1b[0m`;
            }
            if (info.level === 'http') {
                return `${info.timestamp} \x1b[32m${info.level}\x1b[0m: \n\x1b[35m\x1b[4m${info.message}\x1b[0m`;
            }
            return info;
        });
        this._console = this.winston.createLogger({
            // level: 'desarrollo' === 'production' ? 'info' : 'debug',
            format: format.combine(
            // format.label({ label: path.basename(module.parent.filename) }),
            format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), 
            // Format the metadata object
            format.metadata({
                fillExcept: ['message', 'level', 'timestamp', 'label'],
            })),
            transports: [
                new transports.File({
                    filename: `${__dirname}/../logs/log-api.log`,
                    format: format.combine(
                    // Render in one line in your log file.
                    // If you use  here it will be really
                    // difficult to exploit your logs files afterwards.
                    format.prettyPrint()),
                    handleExceptions: true,
                    maxsize: 5242880,
                    maxFiles: 5
                }),
                new transports.Console({
                    format: format.combine(logFormat, format.splat()),
                }),
            ],
            exitOnError: false,
        });
    }
}
exports.default = WinstonLog;
//# sourceMappingURL=winston.js.map