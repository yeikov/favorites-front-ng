import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  res
  resIn:boolean;
  criterio = 'recientes'

  ngOnInit(): void {

    this.res = this.userService.recent(this.criterio).subscribe(res => {
      this.res = res;
      this.resIn = true;
    });
  }

  item(id){
    console.log(id);
    this.router.navigate(['user/' + id]);
    
  }
}
