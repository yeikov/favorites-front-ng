import { Component, inject, OnInit } from '@angular/core';

import { RouterLink, RouterOutlet } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { HeaderComponent } from './common/frame/header/header.component';
import { FooterComponent } from './common/frame/footer/footer.component';

import { SessionService } from './components/login/session.service';
import { ViewerService } from './components/viewer/viewer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, RouterLink, UiModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'favorites-front-ng';
  private viewerService = inject(ViewerService);
  private sessionService = inject(SessionService);
  dataList: any;
  resIn = false;
  isEmpty = true;
  criterio = 'recientes';

}
