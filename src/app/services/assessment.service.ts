import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http: HttpClient) { }

  backendUrl = 'http://localhost:8080' +'/backend'+'/assessments';

   user(userId): Observable<any>{
    return this.http.get(this.backendUrl+'/user/'+userId)
  }

  media(media):Observable<any>{
    return this.http.get(this.backendUrl+"/media/"+media);
  }


}
