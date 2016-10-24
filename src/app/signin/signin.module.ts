import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './index';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    FormsModule,
    RouterModule
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule {
}
