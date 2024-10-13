import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilities as FavoriteUtilities, Utilities} from '../common/utilities';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private http: HttpClient ) { }

  private entityUrl = Utilities.favoritesBack + '/registries';

    one(id: string): Observable<any>{
    return this.http.get(this.entityUrl+'/'+id)
  }

  topFavorite(media: string): Observable<any> {
    return this.http.get(this.entityUrl + "/topFavorite/"+ media);
  }

  topRecommend(media: string): Observable<any> {
    return this.http.get(this.entityUrl + "/topRecommend/"+ media);
  }
  
}
