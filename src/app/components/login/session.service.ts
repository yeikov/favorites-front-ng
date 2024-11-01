import { Injectable } from '@angular/core';
import { User } from '../users/user.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _user = new User();
  
  private _userLogged = false;

  private _addMode = false;


  public get user(): User {
    return this._user;
  }

  public set user(user: User) {
    this._user = user;
  }

  public get userLogged(): boolean {
    return this._userLogged;
  }

  public set userLogged(v: boolean) {
    this._userLogged = v;
  }


  public get addMode(): boolean {
    return this._addMode;
  }

  public set addMode(v: boolean) {
    this._addMode = v;
  }


}
