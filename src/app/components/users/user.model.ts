export interface User {
    id: string | number,
    name?: string,
    eMail?: string,
    birth?: Date,
    city?: string
}

export class User implements User {

    constructor(){
        this.name = '';
        this.eMail = '';
        
    }

}