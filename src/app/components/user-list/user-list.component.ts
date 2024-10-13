import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private userService: UserService,
    private router: Router) { }

  res: any;
  resIn:boolean = false;
  criterio = 'recientes';

  ngOnInit(): void {

    this.res = this.userService.recent(this.criterio).subscribe((res: null) => {
      this.res = res;
      this.resIn = true;
    });
  }

  item(id: number){
    console.log(id);
    this.router.navigate(['user/' + id]);
    
  }
}
