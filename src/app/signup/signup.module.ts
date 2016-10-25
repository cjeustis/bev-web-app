import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignUpComponent } from './index';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule {
}
