import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';



@Injectable({ providedIn: 'root' } )
export class Utilities{
    constructor(){};
    backendUrl = environment.development.url +'/backend';    
}