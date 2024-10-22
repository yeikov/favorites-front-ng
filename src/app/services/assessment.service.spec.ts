import { TestBed } from '@angular/core/testing';

import { AssessmentService } from './assessment.service';

describe('AssessmentService', () => {
  let service: AssessmentService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({});
    service = TestBed.inject(AssessmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
