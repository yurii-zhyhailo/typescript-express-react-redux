import axios, 
    { AxiosResponse,
    AxiosPromise } from 'axios';
import { IDictionary, LooseObject } from '../CustomInterfaces'

export interface DataServiceResponse<T = any> extends AxiosResponse<T> {
    data: T;
}

export interface ServicePromise<T = any> extends AxiosPromise<DataServiceResponse<T>> {
}

interface IServiceHandler {
    setPrepend(url: string): this;
    setAppend(url: string): this;
    setHeader(name: string, value: string): this;
    get(): this;
    post(): this;
    put(): this;
    delete(): this;
    call(method: string, params: LooseObject): string[];
    execute(routeName: string, params: IDictionary<any>[]): any;
}

class ServiceHandler implements IServiceHandler {
    private options: {
        append: string;
        prepend: string;
    }; 

    private method: string;
    private routeName: string;
    private isCall: boolean;

    private readonly service: any;
    private readonly component: any;

    private header: IDictionary<string>;

    constructor(service: any, component: any) {
        this.routeName = '';
        this.method = '';
        this.isCall = false;
        this.options = {
            append: '',
            prepend: '',
        }
       
        this.service = service;
        this.component = component;

        this.header = this.service.getHeader() == null ? {} : this.service.getHeader();

        if(this.service.getBaseUrl() == null)
            throw new Error('Declare base method to base URL api.');
    }

    public append(url: string): this {
        this.options.append = url;
        return this;
    }

    public setHeader(name: string, value: string): this {
        this.header[name] = value;
        return this;
    }

    public setPrepend(url: string): this {
        this.options.prepend = url;
        return this;
    }

    public setAppend(url: string): this {
        this.options.append = url;
        return this;
    }

    public get(): this {
        this.method = 'get';
        return this;
    }

    public post() {
        this.method = 'post';
        return this;
    }

    public put() {
        this.method = 'put';
        return this;
    }

    public delete() {
        this.method = 'delete';
        return this;
    }

    private getRoute() {
        if (this.service.getRoutes()[this.routeName] == null) {
            throw new Error(`Route ${this.routeName} not found.`);
        }

        return this.service.getRoutes()[this.routeName];
    }

    private getMethod(route: any): string {
        // if the route method is unavailable in the service methods - throw an exception
        if (route.methods.indexOf(this.method) == -1 ) {
            throw new Error('${this.method} is not found among the service methods.');
        }
        return this.method;
    }

    private runValidation(params: LooseObject): boolean {
        let validation = this.service.getValidation();

        if (validation != undefined) {
            for (let name in params) {
                let rule = validation[name];

                if (rule == undefined) {
                    continue;
                }
                
                let message = rule.message || this.service.getDefaultValidationMessage()
                
                if (typeof rule.validator == 'function' ) {
                    if (!rule.validator(params[name])) {
                        this.component.validationError(message)
                        return false
                    }
                }
            }
        }
        return true;
    }

    public call(methodName: string, params: LooseObject): string[] {
        let methodObj = this.service.getMethods()[methodName];

        if (methodObj == null) {
            throw new Error('${methodName} method is not found in the service.');
        }

        this.method = methodObj.method;

        this.isCall = true;
        let result = this.execute(methodObj.route, params);
        this.isCall = false;

        return result;
    }

    private sendRequest(path: string, routeMethod: string, params: object, call: boolean | false): ServicePromise<string[]> {

        let options: LooseObject = {
            method: this.method,
            baseURL: this.service.getBaseUrl(),
            responseType: 'json',
            url: path + this.options.append,
            data: JSON.stringify(params),
            headers: this.header
        };

        const request = axios(options);
        return request.then((result: any) => {
            if (call) {
                return this.service.castToClassObject(result.data);
            } else {
                this.isSuccess(result);
            }
        }).catch((error: any) => {
            
            console.log("Error! Response is invalid! Nothing happens!");
            //console.log(error.response.data);
            //this.isError(error);
        });
    }

    private isSuccess(result: any) {
        this.method = '';
        result.data = typeof result.data != 'object' || result.data == null ? {} : result.data;

        if (result.status != 200) {
            return this.component.serviceError(result)
        }
        this.component.serviceSuccess(result.data)
    }

    private isError(error: any) {
        throw new Error(error);
    }

    public execute(routeName: string, params: LooseObject): any {
        this.routeName = routeName.toLowerCase();

        let currentRoute = this.getRoute();
        let methodRoute = this.getMethod(currentRoute);
        
        let path = currentRoute.path == null ? this.routeName : currentRoute.path;
        path = path.toLowerCase();

        if (this.runValidation(params)) {
            return this.sendRequest(path, methodRoute, params, this.isCall);
        }
        // throw Validation Error
    }
}

export { IServiceHandler, ServiceHandler };

// https://github.com/leonardovilarinho/vue-fast-axios
