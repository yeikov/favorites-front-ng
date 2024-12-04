import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentComponent } from './assessment.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('AssessmentComponent', () => {
  let component: AssessmentComponent;
  let fixture: ComponentFixture<AssessmentComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ AssessmentComponent ],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
