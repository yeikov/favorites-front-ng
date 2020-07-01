import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    public sessionService: SessionService) { }

  ngOnInit(): void {
  }

  goto(path){
    this.router.navigate([path]);
  }
  logOut(){
    this.sessionService.user.name='';
    this.sessionService.user.eMail='';
    this.sessionService.user.id='';
    this.sessionService.userLogged=false;

  }

}
