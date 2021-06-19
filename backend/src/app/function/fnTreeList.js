"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeListFunction = exports.TreeListService = void 0;
class TreeListService {
    constructor(data, idKey, parentKey, childrenKey) {
        this.data = data;
        this.map = {};
        this.info = {
            ID_KEY: idKey || 'id',
            PARENT_KEY: parentKey || 'parent',
            CHILDREN_KEY: childrenKey || 'children',
        };
    }
    ejecute() {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i][this.info.ID_KEY]) {
                this.map[this.data[i][this.info.ID_KEY]] = this.data[i];
                this.data[i][this.info.CHILDREN_KEY] = [];
            }
        }
    }
}
exports.TreeListService = TreeListService;
const TreeListFunction = ({ xdata, idKey, parentKey, childrenKey, }) => {
    const data = JSON.parse(JSON.stringify(xdata));
    const ID_KEY = idKey || 'id';
    const PARENT_KEY = parentKey || 'parent';
    const CHILDREN_KEY = childrenKey || 'children';
    // const item, id, parentId;
    const map = {};
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < data.length; i++) {
        // make cache
        if (data[i][ID_KEY]) {
            map[data[i][ID_KEY]] = data[i];
            data[i][CHILDREN_KEY] = [];
        }
    }
    for (let i = 0; i < data.length; i++) {
        if (data[i][PARENT_KEY]) {
            // is a child
            if (map[data[i][PARENT_KEY]]) {
                // for dirty data
                map[data[i][PARENT_KEY]][CHILDREN_KEY].push(data[i]); // add child to parent
                data.splice(i, 1); // remove from root
                i--; // iterator correction
            }
            else {
                data[i][PARENT_KEY] = 0; // clean dirty data
            }
        }
    }
    return data;
};
exports.TreeListFunction = TreeListFunction;
//# sourceMappingURL=fnTreeList.js.map