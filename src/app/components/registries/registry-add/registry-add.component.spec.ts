import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryAddComponent } from './registry-add.component';

describe('RegistryAddComponent', () => {
  let component: RegistryAddComponent;
  let fixture: ComponentFixture<RegistryAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryAddComponent]
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
