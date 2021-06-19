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
interface TreeInter {
    xdata: any;
    idKey: string;
    parentKey: string;
    childrenKey: string;
}
export declare const TreeListFunction: ({ xdata, idKey, parentKey, childrenKey, }: TreeInter) => any[];
export {};
