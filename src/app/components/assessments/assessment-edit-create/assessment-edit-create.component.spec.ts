import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentEditCreateComponent } from './assessment-edit-create.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from '../../../app.component';

describe('AssessmentEditCreateComponent', () => {
  let component: AssessmentEditCreateComponent;
  let fixture: ComponentFixture<AssessmentEditCreateComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [ AssessmentEditCreateComponent ],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssessmentEditCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});