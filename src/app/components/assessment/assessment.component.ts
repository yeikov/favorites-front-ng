import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../../services/assessment.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbAccordionCollapse } from '@ng-bootstrap/ng-bootstrap';
import { UiModule } from '../../ui/ui.module';
import { JsonPipe } from '@angular/common';
import { User } from '../../models/user.model';
import { Assessment } from '../../models/assessment.model';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [UiModule, JsonPipe],
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

}