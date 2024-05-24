import { ApplicationConfig, provideExperimentalZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // turn on zoneless (don't use zone.js)
    provideExperimentalZonelessChangeDetection(),
    provideRouter(routes)
  ]
};
