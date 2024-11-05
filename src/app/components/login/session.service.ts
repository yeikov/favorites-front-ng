import { computed, Injectable, Signal, signal } from '@angular/core';
import { User } from '../users/user.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  user = signal(new User());
  
  userLogged: Signal<boolean> = computed(()=>this.user().eMail !== '') ;

  private _addMode = false;

  public get addMode(): boolean {
    return this._addMode;
  }

  public set addMode(v: boolean) {
    this._addMode = v;
  }


}
