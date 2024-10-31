export interface Registry {
    id: string | number,
    title: string,
    media: 'film' | 'album' | 'book' | 'comic'
    author: string,
    productionDate: Date,
    registrations?: string | number


}

export class Registry implements Registry {

}