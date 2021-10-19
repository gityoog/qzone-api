declare function m(e: any): string;
declare function k(e: any, t: any): number[];
declare var Tea: {
    encrypt: (e: any, t: any) => string;
    enAsBase64: (e: any, t: any) => any;
    decrypt: (e: any) => string;
    initkey: (e: any, t: any) => void;
    bytesToStr: (e: any) => string;
    strToBytes: (e: any, t: any) => string;
    bytesInStr: typeof m;
    dataFromStr: typeof k;
};
export default Tea;
