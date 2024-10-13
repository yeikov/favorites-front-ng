import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilities } from '../common/utilities';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private entityUrl = Utilities.favoritesBack + '/users';

  recent(criterio: string): Observable<any> {
    console.log(this.entityUrl);
    return this.http.get(this.entityUrl + '/recent/' + criterio)
  }

  one(id: string): Observable<any> {
    return this.http.get(this.entityUrl + '/' + id)
  }

  oneByEmail(eMail: any): Observable<any> {
    return this.http.post(this.entityUrl + '/email', { eMail: eMail });
  }

}
