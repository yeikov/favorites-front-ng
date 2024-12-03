import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryAddComponent } from './registry-add.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('RegistryAddComponent', () => {
  let component: RegistryAddComponent;
  let fixture: ComponentFixture<RegistryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryAddComponent],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
