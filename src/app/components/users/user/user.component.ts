import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';


import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

import { AssessmentUserListComponent } from '../../assessments/assessment-user-list/assessment-user-list.component';
import { UiModule } from '../../../ui/ui.module';
import { User } from '../user.model';


@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UiModule, AssessmentUserListComponent, JsonPipe],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public isCollapsed = true;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute) { }

  user = new User();
  paramId = '';
  resIn = false;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
      this.userService.one(this.paramId).subscribe(res => { this.user = res; this.resIn = true })
    })
  }

}
