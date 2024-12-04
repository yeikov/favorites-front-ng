import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewerListComponent } from './viewer-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('ViewerListComponent', () => {
  let component: ViewerListComponent;
  let fixture: ComponentFixture<ViewerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ViewerListComponent ],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = await TestBed.createComponent(ViewerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
