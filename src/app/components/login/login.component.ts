import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../users/user.service';
import { SessionService } from './session.service';
import { User } from '../users/user.model';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UserService,
    public sessionService: SessionService,
    private router: Router

  ) { }


  loginUser = new LoginUser('juan@granada.exp');
  addUser = new User('Juan', 'juan@granada.exp', 'Granada');

  submitted = false;
  error = new FavResponseError();

  ngOnInit(): void { }

  onSubmitLogin() {
    this.submitted = true;
    this.userService.oneByEmail(this.loginUser.eMail).subscribe(
      res => {
        this.sessionService.userLogged = true;
        this.sessionService.user = res;
        this.router.navigate(['/user/' + this.sessionService.user.id])

      }, error => {
        this.error = error.error;
      });
  }

  onSubmitAdd() {
    this.submitted = true;
    this.userService.add(this.addUser).subscribe(res => {
      this.sessionService.user = res;

      this.router.navigate(['/user/' + this.sessionService.user.id])
    })
  }

}

export class LoginUser {
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