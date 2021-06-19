export declare const r: {
    _400: (res: any, error: any) => any;
    _200: (res: any, data: any) => any;
    _201: (res: any, data: any) => any;
    _401: (res: any, error: any) => any;
    _500: (res: any, error: any) => any;
    _message: (res: any, message: any) => any;
};
export interface Ireq {
    params: any;
    query: any;
    body: any;
}
