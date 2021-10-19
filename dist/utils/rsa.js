"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var navigator = {
    appName: 'Netscape'
};
var Rsa = function () {
    function r() {
        this.n = null,
            this.e = 0,
            this.d = null,
            this.p = null,
            this.q = null,
            this.dmp1 = null,
            this.dmq1 = null,
            this.coeff = null;
    }
    var t;
    r.prototype.doPublic = function (t) {
        return t.modPowInt(this.e, this.n);
    }
        ,
            r.prototype.setPublic = function (t, e) {
                null != t && null != e && 0 < t.length && 0 < e.length ? (this.n = new m(t, 16),
                    this.e = parseInt(e, 16)) : uv_alert("Invalid RSA public key");
            }
        ,
            r.prototype.encrypt = function (t) {
                return null == (t = function (t, e) {
                    if (e < t.length + 11)
                        return uv_alert("Message too long for RSA"),
                            null;
                    for (var n = new Array, o = t.length - 1; 0 <= o && 0 < e;) {
                        var r = t.charCodeAt(o--);
                        n[--e] = r;
                    }
                    n[--e] = 0;
                    for (var i = new _, a = new Array; 2 < e;) {
                        for (a[0] = 0; 0 == a[0];)
                            i.nextBytes(a);
                        n[--e] = a[0];
                    }
                    return n[--e] = 2,
                        n[--e] = 0,
                        new m(n);
                }(t, this.n.bitLength() + 7 >> 3)) || null == (t = this.doPublic(t)) ? null : 0 == (1 & (t = t.toString(16)).length) ? t : "0" + t;
            };
    function m(t, e, n) {
        null != t && ("number" == typeof t ? this.fromNumber(t, e, n) : null == e && "string" != typeof t ? this.fromString(t, 256) : this.fromString(t, e));
    }
    function v() {
        return new m(null);
    }
    t = "Microsoft Internet Explorer" == navigator.appName ? (m.prototype.am = function (t, e, n, o, r, i) {
        for (var a = 32767 & e, u = e >> 15; 0 <= --i;) {
            var c = 32767 & this[t], s = this[t++] >> 15, l = u * c + s * a;
            r = ((c = a * c + ((32767 & l) << 15) + n[o] + (1073741823 & r)) >>> 30) + (l >>> 15) + u * s + (r >>> 30),
                n[o++] = 1073741823 & c;
        }
        return r;
    }
        ,
            30) : "Netscape" != navigator.appName ? (m.prototype.am = function (t, e, n, o, r, i) {
        for (; 0 <= --i;) {
            var a = e * this[t++] + n[o] + r;
            r = Math.floor(a / 67108864),
                n[o++] = 67108863 & a;
        }
        return r;
    }
        ,
            26) : (m.prototype.am = function (t, e, n, o, r, i) {
        for (var a = 16383 & e, u = e >> 14; 0 <= --i;) {
            var c = 16383 & this[t], s = this[t++] >> 14, l = u * c + s * a;
            r = ((c = a * c + ((16383 & l) << 14) + n[o] + r) >> 28) + (l >> 14) + u * s,
                n[o++] = 268435455 & c;
        }
        return r;
    }
        ,
            28),
        m.prototype.DB = t,
        m.prototype.DM = (1 << t) - 1,
        m.prototype.DV = 1 << t;
    m.prototype.FV = Math.pow(2, 52),
        m.prototype.F1 = 52 - t,
        m.prototype.F2 = 2 * t - 52;
    for (var e, n = "0123456789abcdefghijklmnopqrstuvwxyz", u = new Array, o = "0".charCodeAt(0), i = 0; i <= 9; ++i)
        u[o++] = i;
    for (o = "a".charCodeAt(0),
        i = 10; i < 36; ++i)
        u[o++] = i;
    for (o = "A".charCodeAt(0),
        i = 10; i < 36; ++i)
        u[o++] = i;
    function c(t) {
        return n.charAt(t);
    }
    function a(t) {
        var e = v();
        return e.fromInt(t),
            e;
    }
    function y(t) {
        var e, n = 1;
        return 0 != (e = t >>> 16) && (t = e,
            n += 16),
            0 != (e = t >> 8) && (t = e,
                n += 8),
            0 != (e = t >> 4) && (t = e,
                n += 4),
            0 != (e = t >> 2) && (t = e,
                n += 2),
            0 != (e = t >> 1) && (t = e,
                n += 1),
            n;
    }
    function s(t) {
        this.m = t;
    }
    function l(t) {
        this.m = t,
            this.mp = t.invDigit(),
            this.mpl = 32767 & this.mp,
            this.mph = this.mp >> 15,
            this.um = (1 << t.DB - 15) - 1,
            this.mt2 = 2 * t.t;
    }
    function d() {
        var t;
        t = (new Date).getTime(),
            f[p++] ^= 255 & t,
            f[p++] ^= t >> 8 & 255,
            f[p++] ^= t >> 16 & 255,
            f[p++] ^= t >> 24 & 255,
            k <= p && (p -= k);
    }
    if (s.prototype.convert = function (t) {
        return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
    }
        ,
            s.prototype.revert = function (t) {
                return t;
            }
        ,
            s.prototype.reduce = function (t) {
                t.divRemTo(this.m, null, t);
            }
        ,
            s.prototype.mulTo = function (t, e, n) {
                t.multiplyTo(e, n),
                    this.reduce(n);
            }
        ,
            s.prototype.sqrTo = function (t, e) {
                t.squareTo(e),
                    this.reduce(e);
            }
        ,
            l.prototype.convert = function (t) {
                var e = v();
                return t.abs().dlShiftTo(this.m.t, e),
                    e.divRemTo(this.m, null, e),
                    t.s < 0 && 0 < e.compareTo(m.ZERO) && this.m.subTo(e, e),
                    e;
            }
        ,
            l.prototype.revert = function (t) {
                var e = v();
                return t.copyTo(e),
                    this.reduce(e),
                    e;
            }
        ,
            l.prototype.reduce = function (t) {
                for (; t.t <= this.mt2;)
                    t[t.t++] = 0;
                for (var e = 0; e < this.m.t; ++e) {
                    var n = 32767 & t[e], o = n * this.mpl + ((n * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                    for (t[n = e + this.m.t] += this.m.am(0, o, t, e, 0, this.m.t); t[n] >= t.DV;)
                        t[n] -= t.DV,
                            t[++n]++;
                }
                t.clamp(),
                    t.drShiftTo(this.m.t, t),
                    0 <= t.compareTo(this.m) && t.subTo(this.m, t);
            }
        ,
            l.prototype.mulTo = function (t, e, n) {
                t.multiplyTo(e, n),
                    this.reduce(n);
            }
        ,
            l.prototype.sqrTo = function (t, e) {
                t.squareTo(e),
                    this.reduce(e);
            }
        ,
            m.prototype.copyTo = function (t) {
                for (var e = this.t - 1; 0 <= e; --e)
                    t[e] = this[e];
                t.t = this.t,
                    t.s = this.s;
            }
        ,
            m.prototype.fromInt = function (t) {
                this.t = 1,
                    this.s = t < 0 ? -1 : 0,
                    0 < t ? this[0] = t : t < -1 ? this[0] = t + DV : this.t = 0;
            }
        ,
            m.prototype.fromString = function (t, e) {
                var n;
                if (16 == e)
                    n = 4;
                else if (8 == e)
                    n = 3;
                else if (256 == e)
                    n = 8;
                else if (2 == e)
                    n = 1;
                else if (32 == e)
                    n = 5;
                else {
                    if (4 != e)
                        return void this.fromRadix(t, e);
                    n = 2;
                }
                this.t = 0,
                    this.s = 0;
                for (var o = t.length, r = !1, i = 0; 0 <= --o;) {
                    var a = 8 == n ? 255 & t[o] : (a = o,
                        null == (a = u[t.charCodeAt(a)]) ? -1 : a);
                    a < 0 ? "-" == t.charAt(o) && (r = !0) : (r = !1,
                        0 == i ? this[this.t++] = a : i + n > this.DB ? (this[this.t - 1] |= (a & (1 << this.DB - i) - 1) << i,
                            this[this.t++] = a >> this.DB - i) : this[this.t - 1] |= a << i,
                        (i += n) >= this.DB && (i -= this.DB));
                }
                8 == n && 0 != (128 & t[0]) && (this.s = -1,
                    0 < i && (this[this.t - 1] |= (1 << this.DB - i) - 1 << i)),
                    this.clamp(),
                    r && m.ZERO.subTo(this, this);
            }
        ,
            m.prototype.clamp = function () {
                for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;)
                    --this.t;
            }
        ,
            m.prototype.dlShiftTo = function (t, e) {
                for (var n = this.t - 1; 0 <= n; --n)
                    e[n + t] = this[n];
                for (n = t - 1; 0 <= n; --n)
                    e[n] = 0;
                e.t = this.t + t,
                    e.s = this.s;
            }
        ,
            m.prototype.drShiftTo = function (t, e) {
                for (var n = t; n < this.t; ++n)
                    e[n - t] = this[n];
                e.t = Math.max(this.t - t, 0),
                    e.s = this.s;
            }
        ,
            m.prototype.lShiftTo = function (t, e) {
                for (var n = t % this.DB, o = this.DB - n, r = (1 << o) - 1, i = Math.floor(t / this.DB), a = this.s << n & this.DM, u = this.t - 1; 0 <= u; --u)
                    e[u + i + 1] = this[u] >> o | a,
                        a = (this[u] & r) << n;
                for (u = i - 1; 0 <= u; --u)
                    e[u] = 0;
                e[i] = a,
                    e.t = this.t + i + 1,
                    e.s = this.s,
                    e.clamp();
            }
        ,
            m.prototype.rShiftTo = function (t, e) {
                e.s = this.s;
                var n = Math.floor(t / this.DB);
                if (n >= this.t)
                    e.t = 0;
                else {
                    var o = t % this.DB, r = this.DB - o, i = (1 << o) - 1;
                    e[0] = this[n] >> o;
                    for (var a = n + 1; a < this.t; ++a)
                        e[a - n - 1] |= (this[a] & i) << r,
                            e[a - n] = this[a] >> o;
                    0 < o && (e[this.t - n - 1] |= (this.s & i) << r),
                        e.t = this.t - n,
                        e.clamp();
                }
            }
        ,
            m.prototype.subTo = function (t, e) {
                for (var n = 0, o = 0, r = Math.min(t.t, this.t); n < r;)
                    o += this[n] - t[n],
                        e[n++] = o & this.DM,
                        o >>= this.DB;
                if (t.t < this.t) {
                    for (o -= t.s; n < this.t;)
                        o += this[n],
                            e[n++] = o & this.DM,
                            o >>= this.DB;
                    o += this.s;
                }
                else {
                    for (o += this.s; n < t.t;)
                        o -= t[n],
                            e[n++] = o & this.DM,
                            o >>= this.DB;
                    o -= t.s;
                }
                e.s = o < 0 ? -1 : 0,
                    o < -1 ? e[n++] = this.DV + o : 0 < o && (e[n++] = o),
                    e.t = n,
                    e.clamp();
            }
        ,
            m.prototype.multiplyTo = function (t, e) {
                var n = this.abs(), o = t.abs(), r = n.t;
                for (e.t = r + o.t; 0 <= --r;)
                    e[r] = 0;
                for (r = 0; r < o.t; ++r)
                    e[r + n.t] = n.am(0, o[r], e, r, 0, n.t);
                e.s = 0,
                    e.clamp(),
                    this.s != t.s && m.ZERO.subTo(e, e);
            }
        ,
            m.prototype.squareTo = function (t) {
                for (var e = this.abs(), n = t.t = 2 * e.t; 0 <= --n;)
                    t[n] = 0;
                for (n = 0; n < e.t - 1; ++n) {
                    var o = e.am(n, e[n], t, 2 * n, 0, 1);
                    (t[n + e.t] += e.am(n + 1, 2 * e[n], t, 2 * n + 1, o, e.t - n - 1)) >= e.DV && (t[n + e.t] -= e.DV,
                        t[n + e.t + 1] = 1);
                }
                0 < t.t && (t[t.t - 1] += e.am(n, e[n], t, 2 * n, 0, 1)),
                    t.s = 0,
                    t.clamp();
            }
        ,
            m.prototype.divRemTo = function (t, e, n) {
                var o = t.abs();
                if (!(o.t <= 0)) {
                    var r = this.abs();
                    if (r.t < o.t)
                        return null != e && e.fromInt(0),
                            void (null != n && this.copyTo(n));
                    null == n && (n = v());
                    var i = v(), a = this.s, u = t.s, t = this.DB - y(o[o.t - 1]);
                    0 < t ? (o.lShiftTo(t, i),
                        r.lShiftTo(t, n)) : (o.copyTo(i),
                        r.copyTo(n));
                    var c = i.t, s = i[c - 1];
                    if (0 != s) {
                        var r = s * (1 << this.F1) + (1 < c ? i[c - 2] >> this.F2 : 0), l = this.FV / r, d = (1 << this.F1) / r, f = 1 << this.F2, p = n.t, h = p - c, g = null == e ? v() : e;
                        for (i.dlShiftTo(h, g),
                            0 <= n.compareTo(g) && (n[n.t++] = 1,
                                n.subTo(g, n)),
                            m.ONE.dlShiftTo(c, g),
                            g.subTo(i, i); i.t < c;)
                            i[i.t++] = 0;
                        for (; 0 <= --h;) {
                            var w = n[--p] == s ? this.DM : Math.floor(n[p] * l + (n[p - 1] + f) * d);
                            if ((n[p] += i.am(0, w, n, h, 0, c)) < w)
                                for (i.dlShiftTo(h, g),
                                    n.subTo(g, n); n[p] < --w;)
                                    n.subTo(g, n);
                        }
                        null != e && (n.drShiftTo(c, e),
                            a != u && m.ZERO.subTo(e, e)),
                            n.t = c,
                            n.clamp(),
                            0 < t && n.rShiftTo(t, n),
                            a < 0 && m.ZERO.subTo(n, n);
                    }
                }
            }
        ,
            m.prototype.invDigit = function () {
                if (this.t < 1)
                    return 0;
                var t = this[0];
                if (0 == (1 & t))
                    return 0;
                var e = 3 & t;
                return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
            }
        ,
            m.prototype.isEven = function () {
                return 0 == (0 < this.t ? 1 & this[0] : this.s);
            }
        ,
            m.prototype.exp = function (t, e) {
                if (4294967295 < t || t < 1)
                    return m.ONE;
                var n, o = v(), r = v(), i = e.convert(this), a = y(t) - 1;
                for (i.copyTo(o); 0 <= --a;)
                    e.sqrTo(o, r),
                        0 < (t & 1 << a) ? e.mulTo(r, i, o) : (n = o,
                            o = r,
                            r = n);
                return e.revert(o);
            }
        ,
            m.prototype.toString = function (t) {
                if (this.s < 0)
                    return "-" + this.negate().toString(t);
                var e;
                if (16 == t)
                    e = 4;
                else if (8 == t)
                    e = 3;
                else if (2 == t)
                    e = 1;
                else if (32 == t)
                    e = 5;
                else {
                    if (4 != t)
                        return this.toRadix(t);
                    e = 2;
                }
                var n, o = (1 << e) - 1, r = !1, i = "", a = this.t, u = this.DB - a * this.DB % e;
                if (0 < a--)
                    for (u < this.DB && 0 < (n = this[a] >> u) && (r = !0,
                        i = c(n)); 0 <= a;)
                        u < e ? (n = (this[a] & (1 << u) - 1) << e - u,
                            n |= this[--a] >> (u += this.DB - e)) : (n = this[a] >> (u -= e) & o,
                            u <= 0 && (u += this.DB,
                                --a)),
                            0 < n && (r = !0),
                            r && (i += c(n));
                return r ? i : "0";
            }
        ,
            m.prototype.negate = function () {
                var t = v();
                return m.ZERO.subTo(this, t),
                    t;
            }
        ,
            m.prototype.abs = function () {
                return this.s < 0 ? this.negate() : this;
            }
        ,
            m.prototype.compareTo = function (t) {
                var e = this.s - t.s;
                if (0 != e)
                    return e;
                var n = this.t;
                if (0 != (e = n - t.t))
                    return e;
                for (; 0 <= --n;)
                    if (0 != (e = this[n] - t[n]))
                        return e;
                return 0;
            }
        ,
            m.prototype.bitLength = function () {
                return this.t <= 0 ? 0 : this.DB * (this.t - 1) + y(this[this.t - 1] ^ this.s & this.DM);
            }
        ,
            m.prototype.mod = function (t) {
                var e = v();
                return this.abs().divRemTo(t, null, e),
                    this.s < 0 && 0 < e.compareTo(m.ZERO) && t.subTo(e, e),
                    e;
            }
        ,
            m.prototype.modPowInt = function (t, e) {
                return e = new (t < 256 || e.isEven() ? s : l)(e),
                    this.exp(t, e);
            }
        ,
            m.ZERO = a(0),
        m.ONE = a(1),
        null == f) {
        var f = new Array, p = 0;
        if ("Netscape" == navigator.appName && navigator.appVersion < "5" && window.crypto && window.crypto.random)
            for (var h = window.crypto.random(32), g = 0; g < h.length; ++g)
                f[p++] = 255 & h.charCodeAt(g);
        for (; p < k;)
            g = Math.floor(65536 * Math.random()),
                f[p++] = g >>> 8,
                f[p++] = 255 & g;
        p = 0,
            d();
    }
    function w() {
        if (null == e) {
            for (d(),
                (e = new b).init(f),
                p = 0; p < f.length; ++p)
                f[p] = 0;
            p = 0;
        }
        return e.next();
    }
    function _() { }
    function b() {
        this.i = 0,
            this.j = 0,
            this.S = new Array;
    }
    _.prototype.nextBytes = function (t) {
        for (var e = 0; e < t.length; ++e)
            t[e] = w();
    }
        ,
            b.prototype.init = function (t) {
                for (var e, n, o = 0; o < 256; ++o)
                    this.S[o] = o;
                for (o = e = 0; o < 256; ++o)
                    e = e + this.S[o] + t[o % t.length] & 255,
                        n = this.S[o],
                        this.S[o] = this.S[e],
                        this.S[e] = n;
                this.i = 0,
                    this.j = 0;
            }
        ,
            b.prototype.next = function () {
                var t;
                return this.i = this.i + 1 & 255,
                    this.j = this.j + this.S[this.i] & 255,
                    t = this.S[this.i],
                    this.S[this.i] = this.S[this.j],
                    this.S[this.j] = t,
                    this.S[t + this.S[this.i] & 255];
            };
    var k = 256;
    return {
        "rsa_encrypt": function (t) {
            var o = new r;
            return o.setPublic("e9a815ab9d6e86abbf33a4ac64e9196d5be44a09bd0ed6ae052914e1a865ac8331fed863de8ea697e9a7f63329e5e23cda09c72570f46775b7e39ea9670086f847d3c9c51963b131409b1e04265d9747419c635404ca651bbcbc87f99b8008f7f5824653e3658be4ba73e4480156b390bb73bc1f8b33578e7a4e12440e9396f2552c1aff1c92e797ebacdc37c109ab7bce2367a19c56a033ee04534723cc2558cb27368f5b9d32c04d12dbd86bbd68b1d99b7c349a8453ea75d1b2e94491ab30acf6c46a36a75b721b312bedf4e7aad21e54e9bcbcf8144c79b6e3c05eb4a1547750d224c0085d80e6da3907c3d945051c13c7c1dcefd6520ee8379c4f5231ed", "10001"),
                o.encrypt(t);
        }
    };
}();
exports.default = Rsa;
