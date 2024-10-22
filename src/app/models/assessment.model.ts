import { Registry } from "./registry.model"
import { User } from "./user.model"

export interface Assessment {
    
    id: string,
    user: User,
    registry: Registry
    favorite: number  | string,
    recommend: number | string,
    notes: string,
    registeredAt: Date

}