import { Injectable } from '@angular/core';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  user = { id: null, name: '', eMail: '' };

  userLogged = false;
}
