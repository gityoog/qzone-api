import { Destroy } from "ioc-di"

export default class QzoneApiCookie {
  data: Record<string, string> = {}
  add(data: string[]) {
    data.forEach(value => {
      const result = /(.*?)=(.*?);/.exec(value)
      const expires = /Expires=(.*?);/.exec(value)
      if (expires && expires[1]) {
        const date = new Date(expires[1])
        if (date < new Date) {
          return
        }
      }
      if (result) {
        const [, key, value] = result
        this.data[key] = value
      }
    })
  }
  get(key: string) {
    return this.data[key]
  }
  all() {
    return Object.keys(this.data).reduce((t, c) => {
      return t + `${c}=${this.data[c]};`
    }, '')
  }
  getToken() {
    return getToken(this.get('p_skey') || this.get('skey') || this.get('rv2') || this.get('access_token') || '')
  }

  @Destroy
  destroy() {
    this.data = null!
  }
}

function getToken(key: string) {
  let result = 5381
  for (let i = 0; i < key.length; i++) {
    result += (result << 5) + key.charCodeAt(i)
  }
  return result & 2147483647
}