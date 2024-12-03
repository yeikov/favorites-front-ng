import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentStatisticalSummaryComponent } from './assessment-statistical-summary.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('AssessmentStatisticalSummaryComponent', () => {
  let component: AssessmentStatisticalSummaryComponent;
  let fixture: ComponentFixture<AssessmentStatisticalSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssessmentStatisticalSummaryComponent],
      providers:[HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}])
      ]
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
