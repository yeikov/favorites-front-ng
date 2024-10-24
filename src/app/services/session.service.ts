import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { User } from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  user = new User();

  userLogged = false;
}
