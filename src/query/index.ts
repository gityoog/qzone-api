import { Inject, Service } from "ioc-di"
import QzoneApiCookie from "../cookie"
import QzoneApiRequest from "../request"
import encodePwd from '../utils/pwd'

@Service()
export default class QzoneApiQuery {
  @Inject() private request!: QzoneApiRequest
  @Inject() private cookie!: QzoneApiCookie

  async check(uin: string) {
    const [, verifycode, salt, pt_verifysession_v1, pt_randsalt, ptdrvs] = await this.request.jsonp<string[]>(`https://ui.ptlogin2.qq.com/ssl/check?pt_tea=2&uin=${uin}&appid=0&ptlang=2052&regmaster=&pt_uistyle=9`)
    return {
      verifycode, salt, pt_verifysession_v1, pt_randsalt, ptdrvs
    }
  }

  async login(uin: string, password: string) {
    const { verifycode, salt, pt_verifysession_v1, pt_randsalt, ptdrvs } = await this.check(uin)
    const p = encodePwd(password, salt, verifycode)
    const [code, , url, , msg] = await this.request.jsonp<string[]>(`https://ui.ptlogin2.qq.com/ssl/login?ptdrvs=${ptdrvs}&pt_vcode_v1=0&pt_verifysession_v1=${pt_verifysession_v1}&verifycode=${verifycode}&u=${uin}&p=${p}&pt_randsalt=${pt_randsalt}&ptlang=2052&low_login_enable=0&u1=https%3A%2F%2Fh5.qzone.qq.com%2Fmqzone%2Findex&from_ui=1&fp=loginerroralert&device=2&aid=0&daid=5&pt_ttype=1&pt_3rd_aid=0&ptredirect=1&h=1&g=1&pt_uistyle=9&regmaster=&`)
    if (code !== '0') {
      throw new Error(msg)
    } else if (url) {
      await this.request.get(url)
    }
    return msg
  }

  async getGroupAlbums(uin: string, qunId: string) {
    const token = this.cookie.getToken()
    const [data] = await this.request.jsonp<[{
      code: number
      message: string
      data: {
        album: {
          id: string
          title: string
          updatetime: string
        }[]
      }
    }]>(`https://h5.qzone.qq.com/proxy/domain/u.photo.qzone.qq.com/cgi-bin/upp/qun_list_album_v2?g_tk=${token}&uin=${uin}&qunId=${qunId}&inCharset=utf-8&outCharset=utf-8&num=1000&start=0&t=`)
    if (data.code === 0) {
      return data.data.album
    } else {
      throw new Error(data.message || '获取相册错误')
    }
  }

  async getGroupPhotos(uin: string, qunId: string, albumId: string) {
    const token = this.cookie.getToken()
    const [data] = await this.request.jsonp<[{
      code: number
      message: string
      data: {
        photos: {
          id: string
          name: string
          burl: string
          bheight: number
          bwidth: number
          ownername: string
          owner: number
          uploadtime: string
        }[]
      }
    }]>(`https://h5.qzone.qq.com/proxy/domain/u.photo.qzone.qq.com/cgi-bin/upp/qun_list_photo_v2?g_tk=${token}&uin=${uin}&qunId=${qunId}&albumId=${albumId}&inCharset=utf-8&outCharset=utf-8&num=1000&start=0&t=`)
    if (data.code === 0) {
      return data.data.photos
    } else {
      throw new Error(data.message || '获取相册错误')
    }
  }
}