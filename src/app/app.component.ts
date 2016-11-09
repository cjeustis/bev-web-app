import { Component } from '@angular/core';
import { CONSTANTS } from './shared';
import { UserProvider } from './Providers/user-provider/user.provider';

@Component({
  selector: 'as-app',
  templateUrl: 'app/app.html',
  providers: [UserProvider]
})
export class AppComponent {
  public appBrand: string;

  constructor() {
    this.appBrand = CONSTANTS.MAIN.APP.BRAND;
  }
}
