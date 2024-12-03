import { RegistryService } from './registry.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Registry } from './registry.model';

describe('RegistryService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: RegistryService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new RegistryService(httpClientSpy);
  });


  it('should return expected registries (HttpClient called once)', (done: DoneFn) => {
    const expectedRegistries: Registry[] = [
      { "id": 1, "title": "The Hobbit", "productionDate": "1937-01-01", "media": "book", "author": "J. R. R. Tolkien", "registrations": 35 }
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedRegistries));

    service.one('1').subscribe({
      next: (registries) => {
        expect(registries).withContext('expected registries').toEqual(expectedRegistries);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });

  it('should return an error when the server returns a 404', (done: DoneFn) => {
    const errorResponse = new HttpErrorResponse({
      error: 'test 404 error',
      status: 404,
      statusText: 'Not Found',
    });
    httpClientSpy.get.and.returnValue(asyncError(errorResponse));
    service.one('9999').subscribe({
      next: (response) => 
        {
          expect(response.status).toEqual(404);         
          done()
        }, 
      error: (error) => {
        expect(error.status).toContain('404');
        done();
      },
    });
  });

});

function asyncData(expectedRegistries: Registry[]): import("rxjs").Observable<unknown> {
  return of(expectedRegistries);
}

function asyncError(errorResponse: HttpErrorResponse): import("rxjs").Observable<unknown> {
  return of(errorResponse);
}
