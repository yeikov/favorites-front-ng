import { Component, OnInit, Input } from '@angular/core';

import { AssessmentService } from '../assessment.service';
import { Router, RouterLink } from '@angular/router';


import { DatePipe } from '@angular/common';
import { SessionService } from '../../../common/frame/login/session.service';

@Component({
  selector: 'app-assessment-viewer-list',
  standalone: true,
  imports:[RouterLink, DatePipe],
  templateUrl: './assessment-viewer-list.component.html',
  styleUrls: ['./assessment-viewer-list.component.css']
})
export class AssessmentViewerListComponent implements OnInit {
  @Input()
  viewerId = '';

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
    this.assessmentService.viewer(this.viewerId).subscribe(res => {
      this.list = res.content;
      this.resIn = true;

    });
  }

  gotoItem(assessment: any) {
    if (this.viewerId === null) {
      this.assessmentService.path = 'viewer';
      this.router.navigate(['registry/' + assessment.registry.id]);
    } else {
      this.assessmentService.path = 'viewer';
      this.router.navigate(['assessment/' + assessment.id]);
    }
  }

  doAdd(){
    this.sessionService.addMode = true;
    this.router.navigate(['/registry_explorer']);
  }

}

