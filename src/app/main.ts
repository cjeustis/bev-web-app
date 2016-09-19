/* Avoid: 'error TS2304: Cannot find name <type>' during compilation */
///<reference path='../../typings/index.d.ts'/>

import {AppComponent} from './app.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {provide} from '@angular/core';
import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  provide(LocationStrategy,
  {useClass: HashLocationStrategy})
]);
