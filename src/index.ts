import './utils/string.polyfill'
import { Destroy, Inject, Root } from 'ioc-di'
import QzoneApiQuery from './query'

@Root()
export default class QzoneApi {
  private uin = ''
  @Inject() private query!: QzoneApiQuery

  /**
   * 登录接口
   */
  async login(uin: string, password: string) {
    this.uin = uin
    return await this.query.login(uin, password)
  }

  /**
   * 获取群相册
   */
  async getGroupAlbums(qunId: string) {
    return await this.query.getGroupAlbums(this.uin, qunId)
  }

  /**
   * 获取群相册照片
   */
  async getGroupPhotos(qunId: string, albumId: string) {
    return await this.query.getGroupPhotos(this.uin, qunId, albumId)
  }

  @Destroy
  destroy() {
    // destroy entry
  }
}