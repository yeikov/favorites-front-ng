import { TestBed } from '@angular/core/testing';

import { SessionService } from './session.service';
import { HttpClient } from '@angular/common/http';

describe('SessionService', () => {
  let service: SessionService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(async () => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new SessionService(httpClientSpy);
  });

  it('should be not logged (false)', () => {
    expect(service.viewerLogged()).toBe(false);
  }); 

});
