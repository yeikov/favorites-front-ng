import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public isCollapsed = true;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  user;
  userIn: boolean = false;

  paramId: number;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params.id;
      console.log('paramId', this.paramId)
      this.datosUser();
    })
    
  }

  datosUser(){
    this.userService.one(this.paramId).subscribe(res => {
      this.user = res,
      this.userIn = true
    })
  }


}
