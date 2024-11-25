import { computed, Injectable, Signal, signal } from '@angular/core';
import { User } from '../users/user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: HttpClient){}

  user = signal(new User());
  
  userLogged: Signal<boolean> = computed(()=>this.user().eMail !== '');

  private _addMode = false;

  public get addMode(): boolean {
    return this._addMode;
  }

  public set addMode(v: boolean) {
    this._addMode = v;
  }


/*   authenticate(credentials: UserCredentials, callback: any) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password)
    } : {});

    this.http.get('user', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });

  }
 */

}

class UserCredentials {
  username ='';
  password='';
}
