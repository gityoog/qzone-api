"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ioc_di_1 = require("ioc-di");
var QzoneApiCookie = /** @class */ (function () {
    function QzoneApiCookie() {
        this.data = {};
    }
    QzoneApiCookie.prototype.add = function (data) {
        var _this = this;
        data.forEach(function (value) {
            var result = /(.*?)=(.*?);/.exec(value);
            var expires = /Expires=(.*?);/.exec(value);
            if (expires && expires[1]) {
                var date = new Date(expires[1]);
                if (date < new Date) {
                    return;
                }
            }
            if (result) {
                var _a = __read(result, 3), key = _a[1], value_1 = _a[2];
                _this.data[key] = value_1;
            }
        });
    };
    QzoneApiCookie.prototype.get = function (key) {
        return this.data[key];
    };
    QzoneApiCookie.prototype.all = function () {
        var _this = this;
        return Object.keys(this.data).reduce(function (t, c) {
            return t + (c + "=" + _this.data[c] + ";");
        }, '');
    };
    QzoneApiCookie.prototype.getToken = function () {
        return getToken(this.get('p_skey') || this.get('skey') || this.get('rv2') || this.get('access_token') || '');
    };
    QzoneApiCookie.prototype.destroy = function () {
        this.data = null;
    };
    __decorate([
        ioc_di_1.Destroy,
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], QzoneApiCookie.prototype, "destroy", null);
    return QzoneApiCookie;
}());
exports.default = QzoneApiCookie;
function getToken(key) {
    var result = 5381;
    for (var i = 0; i < key.length; i++) {
        result += (result << 5) + key.charCodeAt(i);
    }
    return result & 2147483647;
}
