"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeListService = void 0;
class TreeListService {
    constructor(data, idKey, parentKey, childrenKey) {
        this.data = data;
        this.map = {};
        this.info = {
            ID_KEY: idKey || "id",
            PARENT_KEY: parentKey || "parent",
            CHILDREN_KEY: childrenKey || "children",
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
//# sourceMappingURL=fnTreeList.js.map