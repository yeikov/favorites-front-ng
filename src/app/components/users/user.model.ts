export interface User {
    id: string | number,
    name?: string,
    eMail?: string,
    birth?: Date,
    city?: string
}

export class User implements User {

    constructor(name = '', eMail = '', city = ''){
        this.name = name;
        this.eMail = eMail;
        this.city = city;
    }

}