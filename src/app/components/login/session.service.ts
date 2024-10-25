import { Injectable } from '@angular/core';
import { User } from '../users/user.model';



@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  user = new User();

  userLogged = false;
}
