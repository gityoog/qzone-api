export default class QzoneApiCookie {
    data: Record<string, string>;
    add(data: string[]): void;
    get(key: string): string;
    all(): string;
    getToken(): number;
    destroy(): void;
}
