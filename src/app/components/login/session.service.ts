import { Injectable } from '@angular/core';
import { User } from '../users/user.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  
  //user = new User('john', 'john@london.exp');
  private user = new User();
  
  getUser():User{
    return this.user;
  }
  
  setUser(u:User):void{
    this.user = u;
  }
  
  userLogged = true;

  addMode = false;

}
