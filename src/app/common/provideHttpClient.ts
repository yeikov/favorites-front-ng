import { provideHttpClient, withXsrfConfiguration } from "@angular/common/http";
import { ApplicationConfig } from "@angular/core";

export const appConfig: ApplicationConfig = {
    providers: [
      provideHttpClient(
        withXsrfConfiguration({
          cookieName: 'CUSTOM_XSRF_TOKEN',
          headerName: 'X-Custom-Xsrf-Header',
        }),
      ),
    ]
  };