import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true,
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

  
  constructor(
    private userService: UserService,
    private router: Router) {
      this.userService.recent(this.criterio).subscribe((res: any) => {
        this.list = res;
        this.resIn = true;
      });
     }

  list: any;
  resIn: boolean = false;
  criterio = 'recientes';

  item(id: number) {
    this.router.navigate(['user/' + id]);
  }
}
