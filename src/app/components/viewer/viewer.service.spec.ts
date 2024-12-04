import { ViewerService } from './viewer.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { Viewer } from './viewer.model';

describe('ViewerService', () => {
let httpClientSpy: jasmine.SpyObj<HttpClient>;
let viewerService: ViewerService;

  beforeEach(() => {
    
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    viewerService = new ViewerService(httpClientSpy);
  });


  it('should return expected viewers (HttpClient called once)', (done: DoneFn) => {
    const expectedViewers: Viewer[] = [
      {"id":1,"name":"Juana","eMail":"juana@london.exp","city":"London","birth":null}
     
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedViewers));

    viewerService.one('1').subscribe({
      next: (viewers) => {
        expect(viewers).withContext('expected viewers').toEqual(expectedViewers);
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
    viewerService.one('9999').subscribe({
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

function asyncData(expectedViewers: Viewer[]): import("rxjs").Observable<unknown> {
  return of(expectedViewers);
}

function asyncError(errorResponse: HttpErrorResponse): import("rxjs").Observable<unknown> {
  return of(errorResponse);
}