import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from '../../services/assessment.service';
import { Router } from '@angular/router';
import { SessionService } from '../../services/session.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-assessment-user-list',
  standalone: true,
  templateUrl: './assessment-user-list.component.html',
  styleUrls: ['./assessment-user-list.component.css']
})
export class AssessmentUserListComponent implements OnInit {
  @Input()
  userId = '';

  constructor(
    private assessmentService: AssessmentService,
    public sessionService: SessionService,
    private router: Router) { 
      
    }

  resIn: boolean = false;
  list: any;

  favorite: boolean = false;
  recommend: boolean = false;

  ngOnInit(): void {

    this.assessmentService.user(this.userId).subscribe(res => {
      this.list = res;
      this.resIn = true;

    });
  }

  item(assessment: any) {
    if (this.userId === null) {
      this.router.navigate(['registry/' + assessment.registry.id])
    } else {
      this.assessmentService.path='user';
      this.router.navigate(['assessment/' + assessment.id]);
    }

  }

}

