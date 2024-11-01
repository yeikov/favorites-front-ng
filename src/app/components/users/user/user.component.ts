import { Component, OnInit, Type } from '@angular/core';
import { JsonPipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { UiModule } from '../../../ui/ui.module';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from '../user.service';
import { AssessmentUserListComponent } from '../../assessments/assessment-user-list/assessment-user-list.component';
import { User } from '../user.model';
import { AssessmentService } from '../../assessments/assessment.service';
import { SessionService } from '../../login/session.service';
import { ModalConfirmComponent } from '../../../common/modal-confirm/modal-confirm.component';

const MODALS: { [name: string]: Type<any> } = {
  confirmDelete: ModalConfirmComponent
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UiModule, AssessmentUserListComponent, JsonPipe],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public isSettingsCollapsed = false;

  constructor(
    private sessionService: SessionService,
    private userService: UserService,
    private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private modalService: NgbModal,
    private router: Router) { }

  user = new User();
  paramId = '';
  resIn = false;

  ngOnInit(): void {
    if (this.sessionService.userLogged)
      this.activatedRoute.params.subscribe(params => {
        this.paramId = params['id'];
        this.userService.one(this.paramId).subscribe(res => { this.user = res; this.resIn = true })
      });
    this.assessmentService.path = 'user';
  }

  deleteUserAsk() {
    const confirmModal = this.modalService.open(MODALS['confirmDelete']);
    confirmModal.componentInstance.entity = 'user';
    confirmModal.closed.subscribe((result) => this.deleteUser(result))

  }

  deleteUser(result: boolean) {
    if (result)
      this.userService.delete(this.paramId).subscribe(res => {
        this.user = new User();
        if (res)
          this.router.navigate(['home']);
      })
  }

}
