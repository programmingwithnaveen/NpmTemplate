import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {SharedModule} from './app/shared.module';


platformBrowserDynamic().bootstrapModule(SharedModule)
  .catch(err => console.log(err));
