import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import { routes } from './common/app-routing/app.routes';
import { provideHttpClient } from '@angular/common/http';

/* 
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
 */


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient()
  ],

};

