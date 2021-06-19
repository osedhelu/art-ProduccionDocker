export declare class Token {
    semilla: any;
    constructor();
    validar(token: any): any;
    generarToken(data: any): string;
}
export declare const middlewareToken: (req: any, res: any, next: any) => void;
