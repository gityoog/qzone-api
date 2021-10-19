export default class QzoneApiRequest {
    private cookie;
    private axios;
    constructor();
    private init;
    get<T>(url: string): Promise<T>;
    jsonp<T>(url: string): Promise<T>;
    destroy(): void;
}
