
import md5 from './md5'
import Tea from './tea'
import Rsa from './rsa'
import Base64 from './base64'

export default function (password: string, salt: string, verifycode: string): string {
  const o = md5(password).toUpperCase()
  const e = md5(_(o) + salt).toUpperCase()
  let n = Tea.strToBytes(verifycode.toUpperCase(), true)
  const r = Number(n.length / 2).toString(16).padStart(4, "0")
  Tea.initkey(e, false)
  n = Tea.encrypt(o + Tea.strToBytes(salt, undefined) + r + n, false)
  const i = Number(n.length / 2).toString(16).padStart(4, "0")
  return Base64.encode(_(Rsa.rsa_encrypt(_(i + n)))).replace(/[\/\+=]/g, function (t: string) {
    return {
      "/": "-",
      "+": "*",
      "=": "_"
    }[t] as string
  })
}


function _(t: string) {
  for (var e = [], n = 0; n < t.length; n += 2)
    e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)))
  return e.join("")
}