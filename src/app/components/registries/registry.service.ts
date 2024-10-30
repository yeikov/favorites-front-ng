import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Utilities as FavoriteUtilities } from '../../common/utilities';
import { Registry } from './registry.model';

@Injectable({
  providedIn: 'root'
})
export class RegistryService {

  constructor(private http: HttpClient) { }

  private entityUrl = FavoriteUtilities.favoritesBack + '/registries';

  public searchCardActive = false;

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

  add(title: string, media: string, author: string, year: string): Observable<any> {
    return this.http.post(this.entityUrl, {'title': title, 'media': media, 'author': author, 'year': year})
  }
  
  delete(id: string):Observable<any>{
    return this.http.delete(this.entityUrl + "/" + id);
  }

}
