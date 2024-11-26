import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentViewerListComponent } from './assessment-viewer-list.component';

describe('AssessmentViewerListComponent', () => {
  let component: AssessmentViewerListComponent;
  let fixture: ComponentFixture<AssessmentViewerListComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AssessmentViewerListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentViewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
