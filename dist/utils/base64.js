"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck 
var Base64 = {
    "PADCHAR": "=",
    "ALPHA": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    "getbyte": function (t, e) {
        e = t.charCodeAt(e);
        if (255 < e)
            throw "INVALID_CHARACTER_ERR: DOM Exception 5";
        return e;
    },
    "encode": function (t) {
        if (1 != arguments.length)
            throw "SyntaxError: Not enough arguments";
        var e, n, o = Base64.PADCHAR, r = Base64.ALPHA, i = Base64.getbyte, a = [], u = (t = "" + t).length - t.length % 3;
        if (0 == t.length)
            return t;
        for (e = 0; e < u; e += 3)
            n = i(t, e) << 16 | i(t, e + 1) << 8 | i(t, e + 2),
                a.push(r.charAt(n >> 18)),
                a.push(r.charAt(n >> 12 & 63)),
                a.push(r.charAt(n >> 6 & 63)),
                a.push(r.charAt(63 & n));
        switch (t.length - u) {
            case 1:
                n = i(t, e) << 16,
                    a.push(r.charAt(n >> 18) + r.charAt(n >> 12 & 63) + o + o);
                break;
            case 2:
                n = i(t, e) << 16 | i(t, e + 1) << 8,
                    a.push(r.charAt(n >> 18) + r.charAt(n >> 12 & 63) + r.charAt(n >> 6 & 63) + o);
        }
        return a.join("");
    }
};
exports.default = Base64;
