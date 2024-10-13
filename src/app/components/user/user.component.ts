import { Component, OnInit } from '@angular/core';


import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

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

  user: any;
  userIn: boolean = false;

  paramId = '';

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
      console.log('paramId', this.paramId)
      this.datosUser();
    })
    
  }

  datosUser(){
    this.userService.one(this.paramId).subscribe((res:null) => {
      this.user = res,
      this.userIn = true
    })
  }


}
