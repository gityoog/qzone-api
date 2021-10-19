import { Already, Destroy, Inject, Service } from "ioc-di"
import axios from 'axios'
import QzoneApiCookie from "../cookie"

@Service()
export default class QzoneApiRequest {
  @Inject() private cookie!: QzoneApiCookie

  private axios = axios.create({
    maxRedirects: 0,
    validateStatus: status => status >= 200 && status < 303
  })

  constructor() {
    this.init()
  }

  @Already
  private init() {
    this.axios.interceptors.request.use(req => {
      req.headers = req.headers || {}
      req.headers['Cookie'] = this.cookie.all()
      return req
    })
    this.axios.interceptors.response.use(res => {
      if (res.headers["set-cookie"]) {
        this.cookie.add(res.headers["set-cookie"])
      }
      return res
    })
  }

  async get<T>(url: string) {
    const res = await this.axios.get<T>(url)
    return res.data
  }

  async jsonp<T>(url: string) {
    const res = await this.axios.get<string>(url)
    return parseJSONPArgs(res.data) as T
  }

  @Destroy
  destroy() {
    this.axios = null!
  }
}