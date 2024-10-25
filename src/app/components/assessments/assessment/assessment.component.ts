import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../../services/assessment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbAccordionCollapse } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '../../../ui/ui.module';
import { JsonPipe } from '@angular/common';
import { User } from '../../../models/user.model';
import { Assessment } from '../../../models/assessment.model';
import { ScorePipe } from '../../../common/pipes/score.pipe';



@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [UiModule, JsonPipe, ScorePipe],
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
      this.paramId = params['id'];
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
    if(this.assessmentService.path === 'assessments')
      this.router.navigate(['registry/'+registryId+'/assessments']);
    if (this.assessmentService.path === 'user')
      this.router.navigate(['user/'+userId]);
  }

}