"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassFn = void 0;
const bcryptjs_1 = require("bcryptjs");
const env_1 = require("../../../env");
const { SALT } = new env_1.Env();
class PassFn {
    comprar(password1, password2) {
        return bcryptjs_1.compareSync(password1, password2);
    }
    generate(password1) {
        return bcryptjs_1.hashSync(password1, SALT);
    }
}
exports.PassFn = PassFn;
//# sourceMappingURL=bcryptjs.js.map