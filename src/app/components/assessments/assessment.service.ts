import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Utilities as FavoriteUtilities } from '../../common/utilities';
import { Assessment } from './assessment.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  constructor(private http: HttpClient) { }

  public path = 'home';

  private entityUrl = FavoriteUtilities.favoritesBack + '/assessments';

  one(assessmentId: string | number): Observable<any> {
    return this.http.get(this.entityUrl + '/' + assessmentId);
  }

  viewer(viewerId: string): Observable<any> {
    return this.http.get(this.entityUrl + '/viewer/' + viewerId);
  }

  media(media: string): Observable<any> {
    return this.http.get(this.entityUrl + "/media/" + media);
  }

  viewerMedia(viewerId: string | number, media: string | String): Observable<any> {
    return this.http.get(this.entityUrl + "/viewer/" + viewerId + "/" + media);
  }

  registry(registryId: string | number): Observable<any> {
    return this.http.get(this.entityUrl + "/registry/" + registryId);
  }

  add(assessment: Assessment): Observable<any> {
    return this.http.post(this.entityUrl, { 'registryId': assessment.registry.id, 'viewerId': assessment.viewer.id, 'notes': assessment.notes, 'favorite': assessment.favorite, 'recommend': assessment.recommend });
  }

  edit(assessment: Assessment): Observable<any> {
    return this.http.put(this.entityUrl + '/' + assessment.id, { 'registryId': assessment.registry.id, 'viewerId': assessment.viewer.id, 'notes': assessment.notes, 'favorite': assessment.favorite, 'recommend': assessment.recommend });
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.entityUrl + '/' + id);
  }


}
