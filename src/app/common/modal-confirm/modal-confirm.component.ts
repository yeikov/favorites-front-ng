import { Component, EventEmitter, inject, Input, input, output, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm',
  standalone: true,
  imports: [],
  templateUrl: './modal-confirm.component.html',
  styleUrl: './modal-confirm.component.css'
})
export class ModalConfirmComponent {
  @Input()
  entity = 'item';

  @Output()
  action = new EventEmitter<boolean>();

  setAction(action: boolean) {
    this.action.emit(action);
  }

  modal = inject(NgbActiveModal);

  confirmAction() {
    this.setAction(true)
    this.modal.close('Ok click');
  }

}
