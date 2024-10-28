import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

import { UiModule } from '../../../ui/ui.module';
import { DatePipe, JsonPipe } from '@angular/common';

import { ScorePipe } from '../../../common/pipes/score.pipe';
import { Assessment } from '../assessment.model';


@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [UiModule, JsonPipe, ScorePipe, DatePipe],
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css']
})
export class AssessmentComponent implements OnInit {

  public isCollapsed = true;

  constructor(private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  assessment: Assessment | undefined;

  paramId: number = 0;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['assessmentId'];
      this.datosAssessment();
    })
  }

  datosAssessment() {
    this.assessmentService.one(this.paramId).subscribe(res => {
      this.assessment = res
    })
  }

  item(entity: string, id: string | number) {
    this.router.navigate([entity + '/' + id]);
  }

  editAssessment(id: string | number) {
    this.router.navigate(['assessment/' + id + '/edit']);
  }

  goBack(registryId: number | string, userId: number | string) {
    if (this.assessmentService.path === 'user')
      this.router.navigate(['user/'+userId]);
    if(this.assessmentService.path !== 'user')
      this.router.navigate(['registry/'+registryId+'/assessments']);
  }

}