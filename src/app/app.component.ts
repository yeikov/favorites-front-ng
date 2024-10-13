import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'favorites-front-ng';
  constructor(private userService: UserService) {

  }
  dataList: any;
  resIn = false;
  isEmpty = true;
  criterio = 'recientes';

  ngOnInit(): void {
    this.isEmpty = true;

    this.userService.recent(this.criterio).subscribe(response => {
      this.dataList = response._embedded;
      this.resIn = true;
      if (this.dataList?.userList?.length > 0) {
        this.isEmpty = false;
      }

    });
  }
}
