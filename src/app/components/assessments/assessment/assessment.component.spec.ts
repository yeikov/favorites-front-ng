import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssessmentComponent } from './assessment.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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
    expect(component).toBeDefined();
  });

  it('should contain "assessment detail"', () => {
    const placeHolderElement: HTMLElement = fixture.nativeElement;
    expect(placeHolderElement.textContent).toContain('assessment detail');
  });

  it('should have <div> with class ".fav-viewer-info-name"', () => {
    const nameElement: HTMLElement = fixture.nativeElement;
    const div = nameElement.querySelector('div.fav-viewer-info-name')!;
    expect(div).toBeDefined();
  });

  it('should find the <p> with fixture.debugElement.nativeElement)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const bannerEl: HTMLElement = bannerDe.nativeElement;
    const div = bannerEl.querySelector('div')!;
    expect(div.textContent).toEqual('assessment detail');
  });

  it('should find the <p> with fixture.debugElement.query(By.css)', () => {
    const bannerDe: DebugElement = fixture.debugElement;
    const paragraphDe = bannerDe.query(By.css('div'));
    const placeholderElement: HTMLElement = paragraphDe.nativeElement;
    expect(placeholderElement.textContent).toEqual('assessment detail');
  });
});
