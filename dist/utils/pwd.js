"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var md5_1 = require("./md5");
var tea_1 = require("./tea");
var rsa_1 = require("./rsa");
var base64_1 = require("./base64");
function default_1(password, salt, verifycode) {
    var o = (0, md5_1.default)(password).toUpperCase();
    var e = (0, md5_1.default)(_(o) + salt).toUpperCase();
    var n = tea_1.default.strToBytes(verifycode.toUpperCase(), true);
    var r = Number(n.length / 2).toString(16).padStart(4, "0");
    tea_1.default.initkey(e, false);
    n = tea_1.default.encrypt(o + tea_1.default.strToBytes(salt, undefined) + r + n, false);
    var i = Number(n.length / 2).toString(16).padStart(4, "0");
    return base64_1.default.encode(_(rsa_1.default.rsa_encrypt(_(i + n)))).replace(/[\/\+=]/g, function (t) {
        return {
            "/": "-",
            "+": "*",
            "=": "_"
        }[t];
    });
}
exports.default = default_1;
function _(t) {
    for (var e = [], n = 0; n < t.length; n += 2)
        e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
    return e.join("");
}
