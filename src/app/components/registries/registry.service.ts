import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilities as FavoriteUtilities } from '../../common/utilities';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private http: HttpClient) { }

  private entityUrl = FavoriteUtilities.favoritesBack + '/registries';

  one(id: string): Observable<any> {
    return this.http.get(this.entityUrl + '/' + id)
  }

  topFavorite(media: string): Observable<any> {
    return this.http.get(this.entityUrl + "/topFavorite/" + media);
  }

  topRecommend(media: string): Observable<any> {
    return this.http.get(this.entityUrl + "/topRecommend/" + media);
  }

  find(title: string): Observable<any>{
    return this.http.post(this.entityUrl + "/find", title);
  }

  /* list(media: string, assessment: string){
    if ()
    return this.http.get(this.entityUrl + "/topRecommend/" + media);
  } */

}
