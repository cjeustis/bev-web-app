import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SignUpComponent } from './index';

@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    FormsModule,
    RouterModule
  ],
  exports: [
    SignUpComponent
  ]
})
export class SignUpModule {
}
