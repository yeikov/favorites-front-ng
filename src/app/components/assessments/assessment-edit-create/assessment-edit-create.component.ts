import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../assessment.service';
import { UiModule } from '../../../ui/ui.module';
import { DatePipe, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Assessment } from '../assessment.model';
import { SessionService } from '../../login/session.service';

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
    private router: Router,
    private sessionService: SessionService
  ) {
  }

  assessment: Assessment | undefined;

  paramId = 0;

  assessmentForm = new FormGroup({
    favorite: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
    recommend: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
    notes: new FormControl('')
  })

  handleSubmit() {
    console.log(this.assessmentForm.value.favorite, this.assessmentForm.value.recommend)
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.paramId = params['id'];
      this.datosAssessment(this.paramId);
    })
  }

  datosAssessment(paramId: number | string) {
    if (paramId)
      this.assessmentService.one(this.paramId).subscribe(res => {
        this.assessment = res;
        this.assessmentForm.controls.favorite.setValue(res.favorite);
        this.assessmentForm.controls.recommend.setValue(res.recommend);
        this.assessmentForm.controls.notes.setValue(res.notes);
      })

    if (!paramId) {
      //add 
      this.assessment = new Assessment();
      this.assessment.user = this.sessionService.user;

    }
  }

  cancel() {
    this.goBack();
  }

  goBack() {
    this.router.navigate(['assessment/' + this.paramId])
  }

}
