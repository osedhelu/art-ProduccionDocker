export interface LoginSchema {
    cedula: string;
    password: string;
    code_empresa?: string;
}
export interface UsuarioSchema {
    CLAVE_SECUNDARIA: string;
    ID_ROL: string;
    ID_UN: string;
    NOMBRE: string;
    USUARIO: string;
}
