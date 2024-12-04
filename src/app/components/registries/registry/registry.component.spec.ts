import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryComponent } from './registry.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('RegistryComponent', () => {
  let component: RegistryComponent;
  let fixture: ComponentFixture<RegistryComponent>;

  beforeEach((() => {
    TestBed.configureTestingModule({
      imports: [RegistryComponent],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
