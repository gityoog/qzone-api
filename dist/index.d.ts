import './utils/string.polyfill';
export default class QzoneApi {
    private uin;
    private query;
    /**
     * 登录接口
     */
    login(uin: string, password: string): Promise<string>;
    /**
     * 获取群相册
     */
    getGroupAlbums(qunId: string): Promise<{
        id: string;
        title: string;
        updatetime: string;
    }[]>;
    /**
     * 获取群相册照片
     */
    getGroupPhotos(qunId: string, albumId: string): Promise<{
        id: string;
        name: string;
        burl: string;
        bheight: number;
        bwidth: number;
        ownername: string;
        owner: number;
        uploadtime: string;
    }[]>;
    destroy(): void;
}
