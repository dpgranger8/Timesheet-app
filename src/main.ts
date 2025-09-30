// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideBrowserGlobalErrorListeners } from '@angular/core';

import { routes } from '../src/app/modules/app-routes';
import { App } from '../src/app/app';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideBrowserGlobalErrorListeners()
  ]
}).catch(err => console.error(err));
