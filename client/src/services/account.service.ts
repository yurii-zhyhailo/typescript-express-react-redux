
import { IDictionary } from '../CustomInterfaces';

export interface IServiceRoute {
    methods: string[],
    path: string
} 

export interface IServiceMethod {
    method: string,
    route: string
}

export class AccountService {
    // defines routes
    public getRoutes(): IDictionary<IServiceRoute> {
        return {
            "root": {
                methods: [
                    'get', 'post', 'put', // assepted methods in route
                ],
                path: 'rest/UserAccounts'
            }
        };
    }

    // gets the methods to call in service instance
    public getMethods(): IDictionary<IServiceMethod> {
        return {
            'list': {
                method: 'get',
                route: 'root'
            },
            'create': {
                method: 'post',
                route: 'root'
            },
            'update': {
                method: 'put',
                route: 'root'
            }
        };
    }

    // gets validation rules
    public getValidation(): object {
        return {
            'first_name': {
                validator : (value : string) => {
                    return value != null;
                },
                message: 'First Name is empty.'
            }
        };
    }
}
