export interface Registry {
    id: string | number,
    title: string,
    media: 'film' | 'album' | 'book' | 'comic' | 'serie'
    author: string,
    productionDate: Date | String,
    registrations?: string | number,
    mentions: number,
    favoriteSum: number,
    recommendSum: number
}

export class Registry implements Registry {

}