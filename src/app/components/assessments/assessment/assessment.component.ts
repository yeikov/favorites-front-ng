import { Component, OnInit, Type } from '@angular/core';
import { AssessmentService } from '../assessment.service';
import { Router, ActivatedRoute } from '@angular/router';

import { UiModule } from '../../../ui/ui.module';
import { DatePipe, JsonPipe } from '@angular/common';

import { ScorePipe } from '../../../common/pipes/score.pipe';
import { Assessment } from '../assessment.model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalConfirmComponent } from '../../../common/modal-confirm/modal-confirm.component';

const MODALS: { [name: string]: Type<any> } = {
  confirmDelete: ModalConfirmComponent
};

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
    private router: Router,
    private modalService: NgbModal
  ) { }

  assessment = new Assessment();

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

  deleteAssessmentAsk(id: string | number) {
    const confirmModal = this.modalService.open(MODALS['confirmDelete']);
    confirmModal.componentInstance.entity = 'assessment';
    confirmModal.closed.subscribe((result) => this.deleteAssessment(result))

  }

  deleteAssessment(result: boolean) {
    if (result)
      this.assessmentService.delete(this.paramId).subscribe(res => {

        if (this.assessment)
          this.goBack(this.assessment.registry.id, this.assessment.viewer.id);
      })
  }

  goBack(registryId: number | string, viewerId: number | string) {
    if (this.assessmentService.path === 'viewer')
      this.router.navigate(['viewer/' + viewerId]);
    if (this.assessmentService.path !== 'viewer')
      this.router.navigate(['registry/' + registryId + '/assessments']);
  }

}