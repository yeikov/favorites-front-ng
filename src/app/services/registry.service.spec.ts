import { TestBed } from '@angular/core/testing';

import { RegistryService } from './registry.service';

describe('RegistryService', () => {
  let service: RegistryService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(RegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
