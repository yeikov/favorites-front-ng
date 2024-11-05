import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilities } from '../../common/utilities';
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private entityUrl = Utilities.favoritesBack + '/users';

  recent(criterio: string): Observable<any> {
    return this.http.get(this.entityUrl + '/recent/' + criterio)
  }

  one(id: string): Observable<any> {
    return this.http.get(this.entityUrl + '/' + id)
  }

  oneByEmail(eMail: any): Observable<any> {
    return this.http.post(this.entityUrl + '/email', { eMail: eMail });
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.entityUrl + '/' + id);
  }

  add(user: User): Observable<any> {
    return this.http.post(this.entityUrl, user);
  }

}
