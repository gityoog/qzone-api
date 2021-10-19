export default class QzoneApiQuery {
    private request;
    private cookie;
    check(uin: string): Promise<{
        verifycode: string;
        salt: string;
        pt_verifysession_v1: string;
        pt_randsalt: string;
        ptdrvs: string;
    }>;
    login(uin: string, password: string): Promise<string>;
    getGroupAlbums(uin: string, qunId: string): Promise<{
        id: string;
        title: string;
        updatetime: string;
    }[]>;
    getGroupPhotos(uin: string, qunId: string, albumId: string): Promise<{
        id: string;
        name: string;
        burl: string;
        bheight: number;
        bwidth: number;
        ownername: string;
        owner: number;
        uploadtime: string;
    }[]>;
}
