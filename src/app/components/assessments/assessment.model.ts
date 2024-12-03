import { Registry } from "../registries/registry.model"
import { Viewer } from "../viewer/viewer.model"


export interface Assessment {
    
    id: number | string,
    viewer: Viewer,
    registry: Registry
    favorite: number  | string,
    recommend: number | string,
    notes: string,
    registeredAt: Date | string

}

export class Assessment implements Assessment{
    
    constructor(){

    }

}