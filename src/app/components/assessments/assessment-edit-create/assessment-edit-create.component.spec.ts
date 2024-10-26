import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentEditCreateComponent } from './assessment-edit-create.component';

describe('AssessmentEditCreateComponent', () => {
  let component: AssessmentEditCreateComponent;
  let fixture: ComponentFixture<AssessmentEditCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentEditCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
