import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { TourOfBeersModule } from './tour-of-beers/tour-of-beers.module';

platformBrowserDynamic().bootstrapModule(TourOfBeersModule)
  .catch(err => console.log(err));
