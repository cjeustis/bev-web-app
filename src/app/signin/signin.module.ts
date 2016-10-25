import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignInComponent } from './index';

@NgModule({
  declarations: [
    SignInComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SignInComponent
  ]
})
export class SignInModule {
}
