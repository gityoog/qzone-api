// @ts-nocheck
var c = ""
  , a = 0
  , i = []
  , u = []
  , s = 0
  , l = 0
  , d = []
  , f = []
  , p = !0
function h() {
  return Math.round(4294967295 * Math.random())
}
function w(e, t, n) {
  (!n || 4 < n) && (n = 4)
  for (var o = 0, i = t; i < t + n; i++)
    o <<= 8,
      o |= e[i]
  return (4294967295 & o) >>> 0
}
function g(e, t, n) {
  e[t + 3] = n >> 0 & 255,
    e[t + 2] = n >> 8 & 255,
    e[t + 1] = n >> 16 & 255,
    e[t + 0] = n >> 24 & 255
}
function m(e) {
  if (!e)
    return ""
  for (var t = "", n = 0; n < e.length; n++) {
    var o = Number(e[n]).toString(16)
    1 == o.length && (o = "0" + o),
      t += o
  }
  return t
}
function _(e) {
  i = new Array(8),
    u = new Array(8),
    s = l = 0,
    p = !0,
    a = 0
  var t = e.length
    , n = 0
  0 != (a = (t + 10) % 8) && (a = 8 - a),
    d = new Array(t + a + 10),
    i[0] = 255 & (248 & h() | a)
  for (var o = 1; o <= a; o++)
    i[o] = 255 & h()
  a++
  for (o = 0; o < 8; o++)
    u[o] = 0
  for (n = 1; n <= 2;)
    a < 8 && (i[a++] = 255 & h(),
      n++),
      8 == a && v()
  for (o = 0; 0 < t;)
    a < 8 && (i[a++] = e[o++],
      t--),
      8 == a && v()
  for (n = 1; n <= 7;)
    a < 8 && (i[a++] = 0,
      n++),
      8 == a && v()
  return d
}
function v() {
  for (var e = 0; e < 8; e++)
    i[e] ^= p ? u[e] : d[l + e]
  for (var t = function (e) {
    var t = 16
      , n = w(e, 0, 4)
      , o = w(e, 4, 4)
      , i = w(c, 0, 4)
      , r = w(c, 4, 4)
      , a = w(c, 8, 4)
      , u = w(c, 12, 4)
      , s = 0
    for (; 0 < t--;)
      o = (4294967295 & (o += ((n = (4294967295 & (n += (o << 4) + i ^ o + (s = (4294967295 & (s += 2654435769)) >>> 0) ^ (o >>> 5) + r)) >>> 0) << 4) + a ^ n + s ^ (n >>> 5) + u)) >>> 0
    e = new Array(8)
    return g(e, 0, n),
      g(e, 4, o),
      e
  }(i), e = 0; e < 8; e++)
    d[s + e] = t[e] ^ u[e],
      u[e] = i[e]
  l = s,
    s += 8,
    a = 0,
    p = !1
}
function y(e) {
  for (var t = 16, n = w(e, 0, 4), o = w(e, 4, 4), i = w(c, 0, 4), r = w(c, 4, 4), a = w(c, 8, 4), u = w(c, 12, 4), s = 3816266640; 0 < t--;)
    n = (4294967295 & (n -= ((o = (4294967295 & (o -= (n << 4) + a ^ n + s ^ (n >>> 5) + u)) >>> 0) << 4) + i ^ o + s ^ (o >>> 5) + r)) >>> 0,
      s = (4294967295 & (s -= 2654435769)) >>> 0
  e = new Array(8)
  return g(e, 0, n),
    g(e, 4, o),
    e
}
function b() {
  f.length
  for (var e = 0; e < 8; e++)
    u[e] ^= f[s + e]
  return u = y(u),
    s += 8,
    a = 0,
    1
}
function k(e, t) {
  var n = []
  if (t)
    for (var o = 0; o < e.length; o++)
      n[o] = 255 & e.charCodeAt(o)
  else
    for (var i = 0, o = 0; o < e.length; o += 2)
      n[i++] = parseInt(e.substr(o, 2), 16)
  return n
}
var Tea = {
  "encrypt": function (e, t) {
    return m(_(k(e, t)))
  },
  "enAsBase64": function (e, t) {
    for (var n = _(k(e, t)), o = "", i = 0; i < n.length; i++)
      o += String.fromCharCode(n[i])
    return r["default"].encode(o)
  },
  "decrypt": function (e) {
    return m(function (e) {
      var t = 0
        , n = new Array(8)
        , o = e.length
      if (f = e,
        o % 8 != 0 || o < 16)
        return null
      if (u = y(e),
        (t = o - (a = 7 & u[0]) - 10) < 0)
        return null
      for (var i = 0; i < n.length; i++)
        n[i] = 0
      d = new Array(t),
        l = 0,
        s = 8,
        a++
      for (var r = 1; r <= 2;)
        if (a < 8 && (a++,
          r++),
          8 == a && (n = e,
            !b()))
          return null
      for (i = 0; 0 != t;)
        if (a < 8 && (d[i] = 255 & (n[l + a] ^ u[a]),
          i++,
          t--,
          a++),
          8 == a && (n = e,
            l = s - 8,
            !b()))
          return null
      for (r = 1; r < 8; r++) {
        if (a < 8) {
          if (0 != (n[l + a] ^ u[a]))
            return null
          a++
        }
        if (8 == a && (n = e,
          l = s,
          !b()))
          return null
      }
      return d
    }(k(e, !1)))
  },
  "initkey": function (e, t) {
    c = k(e, t)
  },
  "bytesToStr": function (e) {
    for (var t = "", n = 0; n < e.length; n += 2)
      t += String.fromCharCode(parseInt(e.substr(n, 2), 16))
    return t
  },
  "strToBytes": function (e, t) {
    if (!e)
      return ""
    t && (e = function (e) {
      var t, n, o = [], i = e.length
      for (t = 0; t < i; t++)
        0 < (n = e.charCodeAt(t)) && n <= 127 ? o.push(e.charAt(t)) : 128 <= n && n <= 2047 ? o.push(String.fromCharCode(192 | n >> 6 & 31), String.fromCharCode(128 | 63 & n)) : 2048 <= n && n <= 65535 && o.push(String.fromCharCode(224 | n >> 12 & 15), String.fromCharCode(128 | n >> 6 & 63), String.fromCharCode(128 | 63 & n))
      return o.join("")
    }(e))
    for (var n = [], o = 0; o < e.length; o++)
      n[o] = e.charCodeAt(o)
    return m(n)
  },
  "bytesInStr": m,
  "dataFromStr": k
}

export default Tea