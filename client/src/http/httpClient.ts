import { HttpClientImpl } from './httpConfigImpl';
import { Util } from '../utilities/util';


export interface RequestClient {
    fetch(url: string, options?: FetchOptions): Promise<Response>;
    fetchRaw(url: string, options?: FetchOptions): Promise<Response>;
    get(url: string, options?: FetchOptions): Promise<Response>;
    post(url: string, options?: FetchOptions): Promise<Response>;
    put(url: string, options?: FetchOptions): Promise<Response>;
    delete(url: string, options?: FetchOptions): Promise<Response>;
}

export interface FetchOptions {
    method?: string;
    body?: any;
}

export class HttpClient implements RequestClient {

    private _impl: HttpClientImpl;

    constructor() {

    }

    public fetch(url: string, options: FetchOptions = {}): Promise<Response> {
        const headers = new Headers();

        if (!headers.has("Content-Type")) {
            headers.append("Content-Type", "application/json;odata=verbose;charset=utf-8");
        }

        return this.fetchRaw(url, options);
    }

    public fetchRaw(url: string, options: FetchOptions = {}): Promise<Response> {
        return this._impl.fetch( url, options);
    }

    public get(url: string, options: FetchOptions = {}): Promise<Response> {
        const opts = Util.extend(options, { method: "GET" });
        return this.fetch(url, opts);
    }

    public post(url: string, options: FetchOptions = {}): Promise<Response> {
        const opts = Util.extend(options, { method: "POST" });
        return this.fetch(url, opts);
    }

    public put(url: string, options: FetchOptions = {}): Promise<Response> {
        const opts = Util.extend(options, { method: "PUT" });
        return this.fetch(url, opts);
    }

    public delete(url: string, options: FetchOptions = {}): Promise<Response> {
        const opts = Util.extend(options, { method: "DELETE" });
        return this.fetch(url, opts);
    }

    private mergeOptions(target: any, source: any): void {
        target.headers = target.headers || {};
        const headers = Util.extend(target.headers, source.headers);
        target = Util.extend(target, source);
        target.headers = headers;
    }
}
