import { ServiceHandler } from './handler';

export class ServiceFactory {
    constructor() {
        this.checkLibraryExists('axios');
    }

    public create(service: any, component: any): ServiceHandler{
        return new ServiceHandler(service, component);
    }

    public checkLibraryExists(name: string) {
        try {
            // check if service handler libraries exist
            const axios = require(name);
        } catch (error) {
            throw new Error('${name} library is not found.'); 
        }
    } 
}
