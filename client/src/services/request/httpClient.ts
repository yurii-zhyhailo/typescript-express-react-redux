import { RequestClient, FetchOptions } from './IRequestClient';


export interface HttpClientImpl {
    fetch(url: string, options: FetchOptions): Promise<Response>;
}

export class HttpClient implements RequestClient {

    private _impl: HttpClientImpl;

    constructor() {
    }

    public fetch(url: string, options: FetchOptions): Promise<Response> {
        const headers = new Headers();
            let requestOptions = {
                method: 'GET',
                headers
            };
            return fetch('/url', requestOptions);
    }

    public fetchRaw(url: string, options: FetchOptions = {}): Promise<Response> {
        return this.fetch(url, options);
    }

    public get(url: string, options: FetchOptions = {}): Promise<Response> {
        return this.fetch(url, options);
    }

    public post(url: string, options: FetchOptions = {}): Promise<Response> {
        return this.fetch(url, options);
    }

    public put(url: string, options: FetchOptions = {}): Promise<Response> {
        return this.fetch(url, options);
    }

    public delete(url: string, options: FetchOptions = {}): Promise<Response> {
        return this.fetch(url, options);
    }
}
