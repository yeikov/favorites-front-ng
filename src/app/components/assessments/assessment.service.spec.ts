import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Assessment } from "./assessment.model";
import { AssessmentService } from "./assessment.service";
import { Observable, of } from "rxjs";

describe('AssessmentService', () => {
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let service: AssessmentService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new AssessmentService(httpClientSpy);
  });


  it('should return expected assessments (HttpClient called once)', (done: DoneFn) => {
    const expectedAssessments: Assessment[] = [
      { "id": 7, "viewer": { "id": 1, "name": "Juana", "eMail": "juana@london.exp", "city": "London", "birth": null }, "registry": { "id": 2, "title": "The Hunger Games", "productionDate": "2008-01-01", "media": "book", "author": "Suzanne Collins", "registrations": 32 }, "registeredAt": "2024-12-03T11:21:09.719024", "favorite": 1, "recommend": 2, "notes": "Great!" },
      { "id": 14, "viewer": { "id": 1, "name": "Juana", "eMail": "juana@london.exp", "city": "London", "birth": null }, "registry": { "id": 11, "title": "A Tale of Two Cities", "productionDate": "1858-12-31", "media": "book", "author": "Charles Dickens", "registrations": 36 }, "registeredAt": "2024-12-03T11:21:09.723025", "favorite": 0, "recommend": 0, "notes": "Great!" },
      { "id": 15, "viewer": { "id": 1, "name": "Juana", "eMail": "juana@london.exp", "city": "London", "birth": null }, "registry": { "id": 25, "title": "L'Incal", "productionDate": "1981-01-01", "media": "comic", "author": "Moebius, Jodorowsky", "registrations": 38 }, "registeredAt": "2024-12-03T11:21:09.723025", "favorite": 0, "recommend": 0, "notes": "Great!" },
      { "id": 16, "viewer": { "id": 1, "name": "Juana", "eMail": "juana@london.exp", "city": "London", "birth": null }, "registry": { "id": 17, "title": "Blade Runner", "productionDate": "1982-01-01", "media": "film", "author": "Ridley Scott", "registrations": 33 }, "registeredAt": "2024-12-03T11:21:09.723025", "favorite": 0, "recommend": 0, "notes": "Great!" },
      { "id": 17, "viewer": { "id": 1, "name": "Juana", "eMail": "juana@london.exp", "city": "London", "birth": null }, "registry": { "id": 18, "title": "Chernobyl", "productionDate": "0002-12-31", "media": "serie", "author": "", "registrations": 38 }, "registeredAt": "2024-12-03T11:21:09.723025", "favorite": 0, "recommend": 0, "notes": "Great!" },
      { "id": 18, "viewer": { "id": 1, "name": "Juana", "eMail": "juana@london.exp", "city": "London", "birth": null }, "registry": { "id": 9, "title": "1984", "productionDate": "1949-01-01", "media": "book", "author": "George Orwell", "registrations": 33 }, "registeredAt": "2024-12-03T11:21:09.723025", "favorite": 2, "recommend": 1, "notes": "Great!" }
    ];
    httpClientSpy.get.and.returnValue(asyncData(expectedAssessments));

    service.viewer('1').subscribe({
      next: (assessments) => {
        expect(assessments).withContext('expected assessments').toEqual(expectedAssessments);
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

function asyncData(expectedAssessments: Assessment[]): import("rxjs").Observable<unknown> {
  return of(expectedAssessments);
}

function asyncError(errorResponse: HttpErrorResponse): import("rxjs").Observable<unknown> {
  return of(errorResponse);
  //throw new Error("Function not implemented.");
}

