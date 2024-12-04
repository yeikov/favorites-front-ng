import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryExplorerComponent } from './registry-explorer.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from '../../../app.component';

describe('RegistryExplorerComponent', () => {
  let component: RegistryExplorerComponent;
  let fixture: ComponentFixture<RegistryExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryExplorerComponent],
      providers: [HttpClient, HttpHandler,
        provideRouter([{path: '**', component: AppComponent}]),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryExplorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
