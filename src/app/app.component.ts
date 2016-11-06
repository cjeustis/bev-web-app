import { Component } from '@angular/core';
import { CONSTANTS } from './shared';
import { UserService } from './userProvider/user.provider';

@Component({
  selector: 'as-app',
  templateUrl: 'app/app.html',
  providers: [UserService]
})
export class AppComponent {
  public appBrand: string;

  constructor() {
    this.appBrand = CONSTANTS.MAIN.APP.BRAND;
  }
}
