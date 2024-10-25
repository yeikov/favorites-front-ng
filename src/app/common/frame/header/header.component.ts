import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from '../../../components/login/session.service';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [RouterLink]
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,

    public sessionService: SessionService) { }

  ngOnInit(): void {
    
  }

  goto(path: any) {
    this.router.navigate([path]);
  }

  logOut() {
    this.sessionService.user.name = '';
    this.sessionService.user.eMail = '';
    this.sessionService.user.id = -1;
    this.sessionService.userLogged = false;

  }

}
