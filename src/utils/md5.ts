// @ts-nocheck

var i = 1,
  r = 8,
  d = 32

function c(e) {
  return v(l(_(e = e), e.length * r))
}
function l(e, t) {
  e[t >> 5] |= 128 << t % 32,
    e[14 + (t + 64 >>> 9 << 4)] = t
  for (var n = 1732584193, o = -271733879, i = -1732584194, r = 271733878, a = 0; a < e.length; a += 16) {
    var u = n
      , s = o
      , c = i
      , l = r
      , n = p(n, o, i, r, e[a + 0], 7, -680876936)
      , r = p(r, n, o, i, e[a + 1], 12, -389564586)
      , i = p(i, r, n, o, e[a + 2], 17, 606105819)
      , o = p(o, i, r, n, e[a + 3], 22, -1044525330)
    n = p(n, o, i, r, e[a + 4], 7, -176418897),
      r = p(r, n, o, i, e[a + 5], 12, 1200080426),
      i = p(i, r, n, o, e[a + 6], 17, -1473231341),
      o = p(o, i, r, n, e[a + 7], 22, -45705983),
      n = p(n, o, i, r, e[a + 8], 7, 1770035416),
      r = p(r, n, o, i, e[a + 9], 12, -1958414417),
      i = p(i, r, n, o, e[a + 10], 17, -42063),
      o = p(o, i, r, n, e[a + 11], 22, -1990404162),
      n = p(n, o, i, r, e[a + 12], 7, 1804603682),
      r = p(r, n, o, i, e[a + 13], 12, -40341101),
      i = p(i, r, n, o, e[a + 14], 17, -1502002290),
      n = h(n, o = p(o, i, r, n, e[a + 15], 22, 1236535329), i, r, e[a + 1], 5, -165796510),
      r = h(r, n, o, i, e[a + 6], 9, -1069501632),
      i = h(i, r, n, o, e[a + 11], 14, 643717713),
      o = h(o, i, r, n, e[a + 0], 20, -373897302),
      n = h(n, o, i, r, e[a + 5], 5, -701558691),
      r = h(r, n, o, i, e[a + 10], 9, 38016083),
      i = h(i, r, n, o, e[a + 15], 14, -660478335),
      o = h(o, i, r, n, e[a + 4], 20, -405537848),
      n = h(n, o, i, r, e[a + 9], 5, 568446438),
      r = h(r, n, o, i, e[a + 14], 9, -1019803690),
      i = h(i, r, n, o, e[a + 3], 14, -187363961),
      o = h(o, i, r, n, e[a + 8], 20, 1163531501),
      n = h(n, o, i, r, e[a + 13], 5, -1444681467),
      r = h(r, n, o, i, e[a + 2], 9, -51403784),
      i = h(i, r, n, o, e[a + 7], 14, 1735328473),
      n = w(n, o = h(o, i, r, n, e[a + 12], 20, -1926607734), i, r, e[a + 5], 4, -378558),
      r = w(r, n, o, i, e[a + 8], 11, -2022574463),
      i = w(i, r, n, o, e[a + 11], 16, 1839030562),
      o = w(o, i, r, n, e[a + 14], 23, -35309556),
      n = w(n, o, i, r, e[a + 1], 4, -1530992060),
      r = w(r, n, o, i, e[a + 4], 11, 1272893353),
      i = w(i, r, n, o, e[a + 7], 16, -155497632),
      o = w(o, i, r, n, e[a + 10], 23, -1094730640),
      n = w(n, o, i, r, e[a + 13], 4, 681279174),
      r = w(r, n, o, i, e[a + 0], 11, -358537222),
      i = w(i, r, n, o, e[a + 3], 16, -722521979),
      o = w(o, i, r, n, e[a + 6], 23, 76029189),
      n = w(n, o, i, r, e[a + 9], 4, -640364487),
      r = w(r, n, o, i, e[a + 12], 11, -421815835),
      i = w(i, r, n, o, e[a + 15], 16, 530742520),
      n = g(n, o = w(o, i, r, n, e[a + 2], 23, -995338651), i, r, e[a + 0], 6, -198630844),
      r = g(r, n, o, i, e[a + 7], 10, 1126891415),
      i = g(i, r, n, o, e[a + 14], 15, -1416354905),
      o = g(o, i, r, n, e[a + 5], 21, -57434055),
      n = g(n, o, i, r, e[a + 12], 6, 1700485571),
      r = g(r, n, o, i, e[a + 3], 10, -1894986606),
      i = g(i, r, n, o, e[a + 10], 15, -1051523),
      o = g(o, i, r, n, e[a + 1], 21, -2054922799),
      n = g(n, o, i, r, e[a + 8], 6, 1873313359),
      r = g(r, n, o, i, e[a + 15], 10, -30611744),
      i = g(i, r, n, o, e[a + 6], 15, -1560198380),
      o = g(o, i, r, n, e[a + 13], 21, 1309151649),
      n = g(n, o, i, r, e[a + 4], 6, -145523070),
      r = g(r, n, o, i, e[a + 11], 10, -1120210379),
      i = g(i, r, n, o, e[a + 2], 15, 718787259),
      o = g(o, i, r, n, e[a + 9], 21, -343485551),
      n = m(n, u),
      o = m(o, s),
      i = m(i, c),
      r = m(r, l)
  }
  return 16 == d ? Array(o, i) : Array(n, o, i, r)
}
function f(e, t, n, o, i, r) {
  return m((r = m(m(t, e), m(o, r))) << (i = i) | r >>> 32 - i, n)
}
function p(e, t, n, o, i, r, a) {
  return f(t & n | ~t & o, e, t, i, r, a)
}
function h(e, t, n, o, i, r, a) {
  return f(t & o | n & ~o, e, t, i, r, a)
}
function w(e, t, n, o, i, r, a) {
  return f(t ^ n ^ o, e, t, i, r, a)
}
function g(e, t, n, o, i, r, a) {
  return f(n ^ (t | ~o), e, t, i, r, a)
}
function m(e, t) {
  var n = (65535 & e) + (65535 & t)
  return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
}
function _(e) {
  for (var t = Array(), n = (1 << r) - 1, o = 0; o < e.length * r; o += r)
    t[o >> 5] |= (e.charCodeAt(o / r) & n) << o % 32
  return t
}
function v(e) {
  for (var t = i ? "0123456789ABCDEF" : "0123456789abcdef", n = "", o = 0; o < 4 * e.length; o++)
    n += t.charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + t.charAt(e[o >> 2] >> o % 4 * 8 & 15)
  return n
}

export default c