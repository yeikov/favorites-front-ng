import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './common/app-routing/app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withNoXsrfProtection, withXsrfConfiguration } from '@angular/common/http';
import { XhrInterceptor } from './common/xhrInterceptor ';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'CUSTOM_XSRF_TOKEN',
        headerName: 'X-Custom-Xsrf-Header',
      }),
    ),
    { provide: HTTP_INTERCEPTORS, useClass: XhrInterceptor, multi: true }
  ],

};

