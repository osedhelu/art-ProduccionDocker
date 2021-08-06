import { DbService } from "../../db/conexion";
import { LoginSchema, MessageResponse } from "../../interfaces";
export declare class PublicNodel extends DbService {
  listEmpresa(json: any): Promise<MessageResponse>;
  initSeccion(emit: LoginSchema): Promise<MessageResponse>;
}
