import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentEditCreateComponent } from './assessment-edit-create.component';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { AppComponent } from '../../../app.component';

describe('AssessmentEditCreateComponent', () => {
  let component: AssessmentEditCreateComponent;
  let fixture: ComponentFixture<AssessmentEditCreateComponent>;
  let h5: HTMLElement;

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
    h5 = fixture.nativeElement.querySelector('h5');
    
  });

  it('no title in the DOM after createComponent()', () => {
    expect(h5.textContent).toEqual('');
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title after detectChanges()', () => {
    fixture.detectChanges();
    expect(h5.textContent).toContain(component.title()); 
  });

});