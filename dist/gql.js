"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1() {
    var args = Array.prototype.slice.call(arguments);
    var literals = args[0];
    var result = typeof literals === "string" ? literals : literals[0];
    return { query: result };
}
exports.default = default_1;
//# sourceMappingURL=gql.js.map