import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryListComponent } from './registry-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';


describe('RegistryListComponent', () => {
  let component: RegistryListComponent;
  let fixture: ComponentFixture<RegistryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RegistryListComponent ],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = await TestBed.createComponent(RegistryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
