import {  ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerComponent } from './viewer.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('ViewerComponent', () => {
  let component: ViewerComponent;
  let fixture: ComponentFixture<ViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ViewerComponent ],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
