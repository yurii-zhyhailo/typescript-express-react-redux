import { TypedHash } from '../collections/collections';
import { FetchOptions } from './httpClient';

export interface HttpClientImpl {
    fetch(url: string, options: FetchOptions): Promise<Response>;
}

declare var global: any;

/**
 * Makes requests using the fetch API
 */
export class FetchClient implements HttpClientImpl {
    public fetch(url: string, options: any): Promise<Response> {
        return global.fetch(url, options);
    }
}

export default class httpConfigImpl {
    private _baseUrl: string;
    private _headers: TypedHash<string>;
    private _fetchClientFactory: () => FetchClient;

    constructor() {
        this._baseUrl = null;
        this._headers = null;
        this._fetchClientFactory = () => new FetchClient();
    }

    public get baseUrl() {
        return this._baseUrl;
    }

    public get headers(): TypedHash<string> {
        return this._headers
    }

    public get fetchClientFactory(): () => HttpClientImpl {
        return this._fetchClientFactory;
    }
}
