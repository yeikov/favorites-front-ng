import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SessionService } from '../../../components/login/session.service';
import { User } from '../../../components/users/user.model';


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
    this.sessionService.addMode = false;
    this.router.navigate([path]);
  }

  logOut() {
    this.sessionService.user.set(new User());
    

  }

}
