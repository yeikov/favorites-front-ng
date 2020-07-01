import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilities as FavoriteUtilities} from '../common/utilities';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private fU: FavoriteUtilities) { }

  usersUrl = this.fU.backendUrl +'/users';

  recent(criterio): Observable<any>{
    return this.http.get(this.usersUrl+'/recent/'+criterio)
  }
  one(id): Observable<any>{
    return this.http.get(this.usersUrl+'/'+id)
  }
  oneByEmail(eMail):Observable<any>{
    return this.http.post(this.usersUrl+'/email', {eMail: eMail});
  }

}
