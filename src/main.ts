
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { enableProdMode, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID } from '@angular/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
const translations = require(`raw-loader!./locale/messages.es.xlf`);

platformBrowserDynamic().bootstrapModule(AppModule, {
  providers: [
    {provide: TRANSLATIONS, useValue: translations},
    {provide: TRANSLATIONS_FORMAT, useValue: 'xlf'},
    
  ]
});
