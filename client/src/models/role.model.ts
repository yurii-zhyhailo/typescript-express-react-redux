import { IRole} from './interfaces';

export class Role implements IRole {
    public readonly id: string;
    public readonly name: string;

    constructor(
        role: IRole = {
            id: '',
            name: ''
    }) {
        this.id = role.id,
        this.name = role.name
    }
}
