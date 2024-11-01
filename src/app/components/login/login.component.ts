import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserService } from '../users/user.service';
import { SessionService } from './session.service';

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
  

  loginUser = new LoginUser('juana@barcelona.exp');

  submitted = false;

  ngOnInit(): void {
    this.userService.oneByEmail(this.loginUser.eMail).subscribe(
      res => {
        this.sessionService.userLogged = true;
        this.sessionService.user = res;

      });
  }

  onSubmit() {
    this.submitted = true;
    this.router.navigate(['/user/' + this.sessionService.user.id])
  }

}

export class LoginUser{
  constructor( public eMail: string, public password?: string){}

}