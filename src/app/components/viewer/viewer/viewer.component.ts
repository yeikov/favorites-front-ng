import { Component, OnInit, Type } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { UiModule } from '../../../ui/ui.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ViewerService } from '../viewer.service';
import { Viewer } from '../viewer.model';
import { AssessmentService } from '../../assessments/assessment.service';
import { SessionService } from '../../../common/frame/login/session.service';
import { ModalConfirmComponent } from '../../../common/modal-confirm/modal-confirm.component';

const MODALS: { [name: string]: Type<any> } = {
  confirmDelete: ModalConfirmComponent
};

@Component({
  selector: 'app-viewer',
  standalone: true,
  imports: [UiModule, JsonPipe],
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  public isSettingsCollapsed = false;

  constructor(
    private sessionService: SessionService,
    private viewerService: ViewerService,
    private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router) { }

  viewer = new Viewer();
  paramId = '';
  resIn = false;

  ngOnInit(): void {
    if (this.sessionService.viewerLogged()){

      this.activatedRoute.params.subscribe(params => {
        this.paramId = params['id'];
        this.viewerService.one(this.paramId).subscribe(res => { this.viewer = res; this.resIn = true })
      });
      this.assessmentService.path = 'viewer';
    } else {
      this.router.navigate(['home']);
    }

  }

  deleteViewerAsk() {
    const confirmModal = this.modalService.open(MODALS['confirmDelete']);
    confirmModal.componentInstance.entity = 'viewer';
    confirmModal.closed.subscribe((result) => this.deleteViewer(result))

  }

  deleteViewer(result: boolean) {
    if (result)
      this.viewerService.delete(this.paramId).subscribe(res => {
        this.viewer = new Viewer();
        this.sessionService.viewer.set(this.viewer);
       
        
        if (res)
          this.router.navigate(['home']);
      })
  }

}
