export interface Viewer {
    id: string | number,
    name?: string,
    eMail?: string,
    birth?: Date,
    city?: string
}

export class Viewer implements Viewer {

    constructor(name = '', eMail = '', city = ''){
        this.name = name;
        this.eMail = eMail;
        this.city = city;
    }

}