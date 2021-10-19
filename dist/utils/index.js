"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseJSONPArgs = void 0;
/**nosafe */
function parseJSONPArgs(data) {
    var result = /(.*?)\(/.exec(data);
    if (result && result[1]) {
        return eval("(function(" + result[1] + "){\n      return " + data + "\n    })(function(){ return Array.prototype.slice.call(arguments)})");
    }
}
exports.parseJSONPArgs = parseJSONPArgs;
