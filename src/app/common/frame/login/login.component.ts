import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SessionService } from './session.service';
import { ViewerService } from '../../../components/viewer/viewer.service';
import { Viewer } from '../../../components/viewer/viewer.model';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {

  constructor(
    private viewerService: ViewerService,
    public sessionService: SessionService,
    private router: Router

  ) { }


  loginViewer = new LoginViewer('juan@granada.exp');
  addViewer = new Viewer('Juan', 'juan@granada.exp', 'Granada');

  submitted = false;
  error = new FavResponseError();

  ngOnInit(): void { }

  onSubmitLogin() {
    this.submitted = true;
    this.viewerService.oneByEmail(this.loginViewer.eMail).subscribe(
      (res) => {
        
        this.sessionService.viewer.set(res);
        this.router.navigate(['/viewer/' + this.sessionService.viewer().id])

      }, error => {
        this.error = error.error;
      });
  }

  onSubmitAdd() {
    this.submitted = true;
    this.viewerService.add(this.addViewer).subscribe(res => {
      if (res.id > 0){
        this.sessionService.viewer.set(res);
        
        this.router.navigate(['/viewer/' + this.sessionService.viewer().id])
      } else {
        this.error.message = 'Email already exists' 
      }
    })
  }

}

export class LoginViewer {
  constructor(public eMail: string, public password?: string) { }

}

export class FavResponseError {
  constructor(cause = '', message = '') {
    this.cause = cause;
    this.message = message;
  }
  cause: string;
  message: string;

}