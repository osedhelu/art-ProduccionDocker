"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpresService = void 0;
const _x = __importStar(require("./_index"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const config = __importStar(require("../setting/swagger.json"));
const ExpresService = (app) => {
  app.use("/api/login", _x.loginExpress());
  app.use("/api/bcostos", _x.BconstoExpress());
  app.use("/api/admin", _x.ExpressUsers());
  app.use("/api/empresas", _x.EmpresaExpress());
  app.use("/api/dominios", _x.DominiosExpress());
  app.use("/api/aplication", _x.AplicationEExpress());
  app.use("/api/cif", _x.cifExpress());
  app.use("/api/manoObra", _x.ManoObraExpress());
  app.use("/api/umedida", _x.UmedidaExpress());
  app.use("/api/productos", _x.ProductosExpress());
  app.use("/api/empleados", _x.EmpleadosExpress());
  app.use("/api/rutasdp", _x.RutasdpExpress());
  app.use("/api/email", _x.EmailService());
  app.use("/api/menureg", _x.MenuregExpress());
  app.use("/api/file", _x.filesExpress());
  app.use("/api/seccion", _x.SeccionesService());
  app.use(
    "/docs",
    swagger_ui_express_1.default.serve,
    swagger_ui_express_1.default.setup(config)
  );
};
exports.ExpresService = ExpresService;
//# sourceMappingURL=Express._Init.js.map

