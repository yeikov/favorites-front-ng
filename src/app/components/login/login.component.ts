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
  // template-driven form

  eMail='john@london.exp';
  ngOnInit(): void {
    this.userService.oneByEmail(this.eMail).subscribe(
      res=>{
        this.sessionService.userLogged = true;
        this.sessionService.user.id=res.id;
        this.sessionService.user.eMail=res.eMail;
        this.sessionService.user.name=res.name;

      });
  }

  continue(){
    this.router.navigate(['/user/'+this.sessionService.user.id])
  }


}
