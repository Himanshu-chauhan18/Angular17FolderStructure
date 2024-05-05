import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authenticationInterceptor } from './core/interceptors/auth/authentication.interceptor';
// { provide: AuthenticationService }
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withInterceptors([authenticationInterceptor]))
  ]
};
// ng g environments
// ng g m attendance --routing
// ng g c attendance/index -m attendance --standalone=false