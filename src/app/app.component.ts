import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'favorites-front-ng';
  constructor(private userService:UserService){

  }
  res
  resIn:boolean;
  isEmpty:boolean;
  criterio = 'recientes';

  ngOnInit(): void {
    this.isEmpty = true;

    this.res = this.userService.recent(this.criterio).subscribe(res => {
      this.res = res;
      this.resIn = true;
      if (res.content.length>0){
        this.isEmpty = false;
      }

    });
  }
}
