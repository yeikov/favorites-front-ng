import { Component, inject, OnInit } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { HeaderComponent } from './common/frame/header/header.component';
import { FooterComponent } from './common/frame/footer/footer.component';
import { UserService } from './components/users/user.service';
import { SessionService } from './components/login/session.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, RouterLink, UiModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'favorites-front-ng';
  private userService = inject(UserService);
  private sessionService = inject(SessionService);
  dataList: any;
  resIn = false;
  isEmpty = true;
  criterio = 'recientes';

  /* ngOnInit(): void {
    this.isEmpty = true;

    this.userService.recent(this.criterio).subscribe(response => {
      this.dataList = response;
      this.resIn = true;
      if (this.dataList?.length > 0) {
        this.isEmpty = false;
      }

    });


    this.userService.one('2').subscribe(response => {
      this.sessionService.user = response;
    })
  } */
}
