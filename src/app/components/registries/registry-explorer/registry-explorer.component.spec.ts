import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryExplorerComponent } from './registry-explorer.component';

describe('RegistryExplorerComponent', () => {
  let component: RegistryExplorerComponent;
  let fixture: ComponentFixture<RegistryExplorerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryExplorerComponent]
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
