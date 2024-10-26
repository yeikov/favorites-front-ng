export interface User {
    id: string | number,
    name?: string,
    eMail?: string,
    birth?: Date,
    city?: string
}

export class User implements User {

    constructor(name = '', eMail = ''){
        this.name = name;
        this.eMail = eMail;
    }

}