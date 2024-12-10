import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssessmentService } from '../assessment.service';
import { UiModule } from '../../../ui/ui.module';
import { DatePipe, JsonPipe } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Assessment } from '../assessment.model';
import { SessionService } from '../../../common/frame/login/session.service';
import { RegistryService } from '../../registries/registry.service';

@Component({
  selector: 'app-assessment-edit-create',
  standalone: true,
  imports: [UiModule, JsonPipe, ReactiveFormsModule, DatePipe],
  templateUrl: './assessment-edit-create.component.html',
  styleUrl: './assessment-edit-create.component.css'
})
export class AssessmentEditCreateComponent implements OnInit {
  public isCollapsed = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private assessmentService: AssessmentService,
    private registryService: RegistryService,
    private sessionService: SessionService
  ) { }

  title = signal('Edit Assessment'); 

  dataIn = false;

  assessment = new Assessment();

  componentModeIsEdit = true; // edit Assessment.  add Assessment if false;

  paramId = 0;

  assessmentForm = new FormGroup({
    favorite: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
    recommend: new FormControl('', [Validators.required, Validators.min(0), Validators.max(9)]),
    notes: new FormControl('')
  })

  handleSubmit() {
    this.assessment.favorite = this.assessmentForm.controls.favorite.value as string;
    this.assessment.recommend = this.assessmentForm.controls.recommend.value as string;
    this.assessment.notes = this.assessmentForm.controls.notes.value as string;

    if (this.componentModeIsEdit)
      this.assessmentService.edit(this.assessment).subscribe(res => { this.submitResponse(res) })

    if (this.componentModeIsEdit === false)
      this.assessmentService.add(this.assessment).subscribe(res => { this.submitResponse(res) })

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['registryId']) {
        //change component mode
        this.componentModeIsEdit = false;
        this.paramId = params['registryId'];
        this.datosRegistry(this.paramId);
        this.title = signal('New Assessment'); 

      }

      if (params['assessmentId']) {
        this.paramId = params['assessmentId'];
        this.datosAssessment(this.paramId);
      }
    })

  }

  datosRegistry(paramId: number | string) {
    // mode add
    this.registryService.one(paramId.toString()).subscribe(res => {
      this.assessment = new Assessment();
      this.assessment.registry = res;
      this.assessment.viewer = this.sessionService.viewer();

      this.dataIn = true;

    })
  }

  datosAssessment(paramId: number | string) {
    //mode edit
    this.assessmentService.one(paramId).subscribe(res => {
      this.assessment = res;
      this.assessmentForm.controls.favorite.setValue(res.favorite);
      this.assessmentForm.controls.recommend.setValue(res.recommend);
      this.assessmentForm.controls.notes.setValue(res.notes);
      this.dataIn = true;
    })
  }

  cancel() {
    this.goBack();
  }

  submitResponse(res: Assessment) {
    if (res)
      this.goBack();
  }

  goBack() {
    if (this.componentModeIsEdit) {
      this.router.navigate(['assessment/' + this.paramId])
    } else {
      this.router.navigate(['registry/' + this.paramId])
    }
  }

}
