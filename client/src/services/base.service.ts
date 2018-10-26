import { IDictionary} from '../helpers/custom-interfaces';

interface IService {
    getBaseUrl(): any;
    getHeader(): any;
    getRoutes(): any;
    getMethods(): any;
    getValidation(): any;
    getDefaultValidationMessage(): any;
    castToClassObject(plainObject: object): any;
}

class BaseService implements IService {
    public token: string = "QnJva2VyQUs6ZjdjM2JjMWQ4MDhlMDQ3MzJhZGY2Nzk5NjVjY2MzNGNhN2FlMzQ0MQ";
    public baseUrl: string = "http://local.sentry-portal/";

    private header: any = {
        "Authorization": "Basic " + this.token
    };

    public getBaseUrl(): string {
        return this.baseUrl;4
    }

    public getHeader(): IDictionary<string> {
        return this.header;
    }

    public getRoutes(): any {
        throw new Error('NotImplementedException');
    }

    public getMethods(): any {
        throw new Error('NotImplementedException');
    }

    public getValidation(): any {
        throw new Error('NotImplementedException');
    };

    public getDefaultValidationMessage(): any {
        return 'Query param is invalid. '
    }

    public castToClassObject(plainObject: object): any {
        throw new Error('NotImplementedException');
    };
}

export { IService, BaseService }
