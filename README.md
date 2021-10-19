## 安装
```
$ npm install git+https://github.com/gityoog/qzone-api.git --save
```

## 使用
 - `login` 登录接口, 暂不支持验证码等
 - `getGroupAlbums` 获取群相册
 - `getGroupPhotos` 获取群相册照片
```ts
import QzoneApi from 'qzone-api'
const api = new QzoneApi

// 登录
await api.login(user, password)

// 获取群相册
const albums = await api.getGroupAlbums(qunId)

// 获取群相册照片
const photos = await api.getGroupPhotos(qunId, albumId)
```