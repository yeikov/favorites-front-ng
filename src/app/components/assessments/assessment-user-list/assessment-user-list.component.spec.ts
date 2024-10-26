import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentUserListComponent } from './assessment-user-list.component';

describe('AssessmentUserListComponent', () => {
  let component: AssessmentUserListComponent;
  let fixture: ComponentFixture<AssessmentUserListComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentUserListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
