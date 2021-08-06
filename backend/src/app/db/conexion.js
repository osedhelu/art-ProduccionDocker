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
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbService = void 0;
const env_1 = require("../../../env");
const winston_1 = __importDefault(require("../setting/winston"));
const tedious_1 = require("tedious");
const { _console } = new winston_1.default();
class DbService {
  SQLConsult(prmproc, proc = "AAProArtdecon", type = "json") {
    return __awaiter(this, void 0, void 0, function* () {
      const conexion = new tedious_1.Connection(env_1.env.configSQL);
      return new Promise((resolve, reject) => {
        const ssql = `exec ${proc} '${prmproc.action}', '${JSON.stringify(
          prmproc.json
        )}'`;
        conexion.on("connect", (err) => {
          if (err) {
            _console.error("Connection Failed");
            return reject({ ok: false, message: JSON.stringify(err) });
          }
          executeStatement();
        });
        const executeStatement = () => {
          const request = new tedious_1.Request(ssql, (err, rowCount) => {
            if (err) {
              return reject({
                ok: false,
                message: JSON.stringify(err),
              });
            }
            _console.warn(ssql);
            conexion.close();
          });
          request.on("row", (columns) => {
            columns.forEach((column) => {
              if (column.value === null) {
              } else {
                const { ok, message, data } = JSON.parse(columns[0].value);
                if (ok) {
                  return resolve({ ok, data });
                }
                if (ok === undefined) {
                  _console.info(
                    `ok: whildher PROCEDIMIENTO►►►${proc} --->>action:${prmproc.action} `
                  );
                  return resolve({
                    ok,
                    data: JSON.parse(column.value),
                  });
                }
                if (!ok) {
                  _console.info(`ok: ${ok} --111>> ${prmproc.action}`);
                  return reject({ ok, message });
                }
              }
            });
          });
          // In SQL Server 2000 you may need: connection.execSqlBatch(request);
          conexion.execSql(request);
        };
      });
    });
  }
}
exports.DbService = DbService;
//# sourceMappingURL=conexion.js.map

