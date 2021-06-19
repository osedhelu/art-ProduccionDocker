export declare class TreeListService {
    data: any;
    map: any;
    info: {
        ID_KEY: any;
        PARENT_KEY: any;
        CHILDREN_KEY: any;
    };
    constructor(data: any, idKey: string, parentKey: string, childrenKey: string);
    ejecute(): void;
}
