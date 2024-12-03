import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { ActivatedRoute, provideRouter } from '@angular/router';
import { HomeComponent } from './common/frame/home/home.component';

describe('AppComponent', () => {

 /*  const fakeActivatedRoute = {
    snapshot: { 
      } 
  } as ActivatedRoute; */

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent
      ],
      providers: [HttpClient, HttpHandler, 
        /* {provide: ActivatedRoute, useValue: fakeActivatedRoute}, */
        provideRouter([{path: '**', component: AppComponent}]),
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
 
  it(`should have as title 'favorites-front-ng'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('favorites-front-ng');
  });

 
  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement; // fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.col-12 a').textContent).toContain('FAVORITES');
  });

});
 