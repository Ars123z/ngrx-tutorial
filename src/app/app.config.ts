import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { AppState } from './shared/store/global/app.state';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { BlogEffects } from './shared/store/blog/blog.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(AppState), provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), provideEffects(BlogEffects),
    provideHttpClient(),
  ]
};
