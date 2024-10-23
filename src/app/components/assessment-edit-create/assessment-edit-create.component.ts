import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Assessment } from '../../models/assessment.model';
import { AssessmentService } from '../../services/assessment.service';
import { UiModule } from '../../ui/ui.module';
import { DatePipe, JsonPipe } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-assessment-edit-create',
  standalone: true,
  imports: [UiModule, JsonPipe, ReactiveFormsModule, DatePipe],
  templateUrl: './assessment-edit-create.component.html',
  styleUrl: './assessment-edit-create.component.css'
})
export class AssessmentEditCreateComponent {
  public isCollapsed = true;

  constructor(private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { 
  }

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

  cancel(){
    this.goBack();
  }

  goBack(){
    this.router.navigate(['assessment/'+this.paramId])
  }

}
