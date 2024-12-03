import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentViewerListComponent } from './assessment-viewer-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('AssessmentViewerListComponent', () => {
  let component: AssessmentViewerListComponent;
  let fixture: ComponentFixture<AssessmentViewerListComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [AssessmentViewerListComponent],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
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
