import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import {provideRouter, withRouterConfig} from '@angular/router';

import {routes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule} from 'ngx-google-analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withRouterConfig({
      paramsInheritanceStrategy: 'emptyOnly'
    })),
    importProvidersFrom(BrowserAnimationsModule,
      HttpClientModule,
      NgxGoogleAnalyticsModule.forRoot('G-E6R813JBXT'),
      NgxGoogleAnalyticsRouterModule
    )
  ],
};
