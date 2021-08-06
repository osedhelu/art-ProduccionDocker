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
exports.SeccionController = void 0;
const function_1 = require("../function");
const _models_1 = require("../_models");
class SeccionController {
  constructor(socket, io, user) {
    this.socket = socket;
    this.io = io;
    this.model = new _models_1.SeccionModel();
    this.allEmpleados();
    this.EditSeccion();
    this.ListSeccion();
  }
  allSeccion() {
    return __awaiter(this, void 0, void 0, function* () {
      const { ok, data, message } = yield this.model.listSeccion({
        id_unidad: "00",
      });
      if (ok) {
        const treeData = function_1.TreeListFunction({
          idKey: "ITEM",
          parentKey: "ANTERIOR",
          childrenKey: "items",
          xdata: data,
        });
        this.socket.emit("allSeccion", treeData);
      } else {
        this.socket.emit("allSeccion", {
          ok,
          message,
        });
      }
    });
  }
  allEmpleados() {
    this.socket.on("allEmpleados", (data, callback) =>
      __awaiter(this, void 0, void 0, function* () {
        const resp = yield this.model.listEmpleados({
          id_unidad: "00",
          seccion: data,
        });
        callback(resp);
      })
    );
  }
  EditSeccion() {
    this.socket.on("EditSeccion", (resp, callback) => {
      // console.log(resp);
    });
    return { ok: false };
  }
  ListSeccion() {
    this.socket.on("GetSeccion", (emit) =>
      __awaiter(this, void 0, void 0, function* () {
        try {
          this.allSeccion();
        } catch (error) {
          function_1._console.error(JSON.stringify(error));
        }
      })
    );
  }
}
exports.SeccionController = SeccionController;
//# sourceMappingURL=Seccion.controller.js.map

