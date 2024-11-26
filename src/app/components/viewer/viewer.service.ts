import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilities } from '../../common/utilities';
import { Viewer } from './viewer.model';


@Injectable({
  providedIn: 'root'
})
export class ViewerService {

  constructor(private http: HttpClient) { }

  private entityUrl = Utilities.favoritesBack + '/viewers';



  
  one(id: string): Observable<any> {
    return this.http.get(this.entityUrl + '/' + id)
  }

  oneByEmail(eMail: any): Observable<any> {
    return this.http.post(this.entityUrl + '/email', { eMail: eMail });
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.entityUrl + '/' + id);
  }

  add(viewer: Viewer): Observable<any> {
    return this.http.post(this.entityUrl, viewer);
  }

  findByName(name: String): Observable<any>{
    return this.http.get(this.entityUrl + '/findByName');
  }
  recent(media: string): Observable<any> {
    return this.http.get(this.entityUrl + '/recent/' + media);
  }


}
