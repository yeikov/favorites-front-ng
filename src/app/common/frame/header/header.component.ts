import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import { Viewer } from '../../../components/viewer/viewer.model';
import { SessionService } from '../login/session.service';


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
    private http: HttpClient,
    public sessionService: SessionService) { }

  ngOnInit(): void {

  }

  goto(path: any) {
    this.sessionService.addMode = false;
    this.router.navigate([path]);
  }

  logOut() {
    this.http.post('logout', {}).subscribe(() => {
      this.sessionService.viewer.set(new Viewer());
      this.goto('home');
    });

  }


}
