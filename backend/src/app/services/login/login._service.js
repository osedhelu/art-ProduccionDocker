"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginExpress = void 0;
const function_1 = require("../../function");
const middleware_1 = require("../../middleware");
const _models_1 = require("../../_models");
const modelPublic = new _models_1.PublicNodel();
const loginExpress = () => {
  const app = function_1.Router();
  app.post("/", (req, res) =>
    __awaiter(void 0, void 0, void 0, function* () {
      try {
        const seccion = yield modelPublic.initSeccion(req.body);
        function_1.r._200(res, seccion);
      } catch (error) {
        return req._400(res, error);
      }
    })
  );
  app.get("/auth", middleware_1.middlewareToken, (req, res) => {
    function_1.r._200(res, { ok: true });
  });
  return app;
};
exports.loginExpress = loginExpress;
//# sourceMappingURL=login._service.js.map

