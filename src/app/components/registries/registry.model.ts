export interface Registry {
    id: string | number,
    title: string,
    media: 'film' | 'album' | 'book' | 'comic'
    author: string,
    productionDate: Date,


}

export class Registry implements Registry {

}