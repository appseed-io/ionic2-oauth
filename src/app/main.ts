import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
