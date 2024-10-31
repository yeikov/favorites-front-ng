import { Registry } from "../registries/registry.model"
import { User } from "../users/user.model"

export interface Assessment {
    
    id: string,
    user: User,
    registry: Registry
    favorite: number  | string,
    recommend: number | string,
    notes: string,
    registeredAt: Date

}

export class Assessment implements Assessment{
    
    constructor(){

    }

}