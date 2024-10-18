import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Utilities as FavoriteUtilities, Utilities } from '../common/utilities';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http: HttpClient) { }

  private entityUrl = Utilities.favoritesBack + '/assessments';

  one(assessmentId: string | number): Observable<any> {
    return this.http.get(this.entityUrl+'/'+assessmentId);
  }

  user(userId: string): Observable<any> {
    return this.http.get(this.entityUrl + '/user/' + userId);
  }

  media(media: string): Observable<any> {
    return this.http.get(this.entityUrl + "/media/" + media);
  }

  userMedia(userId: string | number, media: string | String): Observable<any> {
    return this.http.get(this.entityUrl + "/user/"+userId+ "/" + media);
  }

  registry(registryId: string | number): Observable<any> {
    return this.http.get(this.entityUrl + "/registry/"+registryId);
  }


}
