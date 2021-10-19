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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
var cookie_1 = require("../cookie");
var request_1 = require("../request");
var pwd_1 = require("../utils/pwd");
var QzoneApiQuery = /** @class */ (function () {
    function QzoneApiQuery() {
    }
    QzoneApiQuery.prototype.check = function (uin) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, verifycode, salt, pt_verifysession_v1, pt_randsalt, ptdrvs;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.request.jsonp("https://ui.ptlogin2.qq.com/ssl/check?pt_tea=2&uin=" + uin + "&appid=0&ptlang=2052&regmaster=&pt_uistyle=9")];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 6]), verifycode = _a[1], salt = _a[2], pt_verifysession_v1 = _a[3], pt_randsalt = _a[4], ptdrvs = _a[5];
                        return [2 /*return*/, {
                                verifycode: verifycode,
                                salt: salt,
                                pt_verifysession_v1: pt_verifysession_v1,
                                pt_randsalt: pt_randsalt,
                                ptdrvs: ptdrvs
                            }];
                }
            });
        });
    };
    QzoneApiQuery.prototype.login = function (uin, password) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, verifycode, salt, pt_verifysession_v1, pt_randsalt, ptdrvs, p, _b, code, url, msg;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, this.check(uin)];
                    case 1:
                        _a = _c.sent(), verifycode = _a.verifycode, salt = _a.salt, pt_verifysession_v1 = _a.pt_verifysession_v1, pt_randsalt = _a.pt_randsalt, ptdrvs = _a.ptdrvs;
                        p = (0, pwd_1.default)(password, salt, verifycode);
                        return [4 /*yield*/, this.request.jsonp("https://ui.ptlogin2.qq.com/ssl/login?ptdrvs=" + ptdrvs + "&pt_vcode_v1=0&pt_verifysession_v1=" + pt_verifysession_v1 + "&verifycode=" + verifycode + "&u=" + uin + "&p=" + p + "&pt_randsalt=" + pt_randsalt + "&ptlang=2052&low_login_enable=0&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fmqzone%2Findex&from_ui=1&fp=loginerroralert&device=2&aid=0&daid=5&pt_ttype=1&pt_3rd_aid=0&ptredirect=1&h=1&g=1&pt_uistyle=9&regmaster=&")];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 5]), code = _b[0], url = _b[2], msg = _b[4];
                        if (!(code !== '0')) return [3 /*break*/, 3];
                        throw new Error(msg);
                    case 3:
                        if (!url) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.request.get(url)];
                    case 4:
                        _c.sent();
                        _c.label = 5;
                    case 5: return [2 /*return*/, msg];
                }
            });
        });
    };
    QzoneApiQuery.prototype.getGroupAlbums = function (uin, qunId) {
        return __awaiter(this, void 0, void 0, function () {
            var token, _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = this.cookie.getToken();
                        return [4 /*yield*/, this.request.jsonp("https://h5.qzone.qq.com/proxy/domain/u.photo.qzone.qq.com/cgi-bin/upp/qun_list_album_v2?g_tk=" + token + "&uin=" + uin + "&qunId=" + qunId + "&inCharset=utf-8&outCharset=utf-8&num=1000&start=0&t=")];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), data = _a[0];
                        if (data.code === 0) {
                            return [2 /*return*/, data.data.album];
                        }
                        else {
                            throw new Error(data.message || '获取相册错误');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QzoneApiQuery.prototype.getGroupPhotos = function (uin, qunId, albumId) {
        return __awaiter(this, void 0, void 0, function () {
            var token, _a, data;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        token = this.cookie.getToken();
                        return [4 /*yield*/, this.request.jsonp("https://h5.qzone.qq.com/proxy/domain/u.photo.qzone.qq.com/cgi-bin/upp/qun_list_photo_v2?g_tk=" + token + "&uin=" + uin + "&qunId=" + qunId + "&albumId=" + albumId + "&inCharset=utf-8&outCharset=utf-8&num=1000&start=0&t=")];
                    case 1:
                        _a = __read.apply(void 0, [_b.sent(), 1]), data = _a[0];
                        if (data.code === 0) {
                            return [2 /*return*/, data.data.photos];
                        }
                        else {
                            throw new Error(data.message || '获取相册错误');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, ioc_di_1.Inject)(),
        __metadata("design:type", request_1.default)
    ], QzoneApiQuery.prototype, "request", void 0);
    __decorate([
        (0, ioc_di_1.Inject)(),
        __metadata("design:type", cookie_1.default)
    ], QzoneApiQuery.prototype, "cookie", void 0);
    QzoneApiQuery = __decorate([
        (0, ioc_di_1.Service)()
    ], QzoneApiQuery);
    return QzoneApiQuery;
}());
exports.default = QzoneApiQuery;
