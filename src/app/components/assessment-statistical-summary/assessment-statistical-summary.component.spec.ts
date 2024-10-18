import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentStatisticalSummaryComponent } from './assessment-statistical-summary.component';

describe('AssessmentStatisticalSummaryComponent', () => {
  let component: AssessmentStatisticalSummaryComponent;
  let fixture: ComponentFixture<AssessmentStatisticalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentStatisticalSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssessmentStatisticalSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
