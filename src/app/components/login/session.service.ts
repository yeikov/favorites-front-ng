import { computed, Injectable, Signal, signal } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Viewer } from '../viewer/viewer.model';


@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: HttpClient){}

  viewer = signal(new Viewer());
  
  viewerLogged: Signal<boolean> = computed(()=>this.viewer().eMail !== '');

  private _addMode = false;

  public get addMode(): boolean {
    return this._addMode;
  }

  public set addMode(v: boolean) {
    this._addMode = v;
  }


/*   authenticate(credentials: ViewerCredentials, callback: any) {

    const headers = new HttpHeaders(credentials ? {
        authorization : 'Basic ' + btoa(credentials.viewername + ':' + credentials.password)
    } : {});

    this.http.get('viewer', {headers: headers}).subscribe(response => {
        if (response['name']) {
            this.authenticated = true;
        } else {
            this.authenticated = false;
        }
        return callback && callback();
    });

  }
 */

}

class ViewerCredentials {
  viewername ='';
  password='';
}
