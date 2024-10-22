import { Component, inject, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UiModule } from './ui/ui.module';
import { HeaderComponent } from './common/frame/header/header.component';
import { FooterComponent } from './common/frame/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet, RouterLink, UiModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'favorites-front-ng';
  private userService = inject(UserService);
  dataList: any;
  resIn = false;
  isEmpty = true;
  criterio = 'recientes';

  ngOnInit(): void {
    this.isEmpty = true;

    this.userService.recent(this.criterio).subscribe(response => {
      this.dataList = response;
      this.resIn = true;
      if (this.dataList?.length > 0) {
        this.isEmpty = false;
      }

    });
  }
}
