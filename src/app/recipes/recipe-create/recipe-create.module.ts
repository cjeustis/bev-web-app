import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CreateRecipeComponent } from '../index';

@NgModule({
  declarations: [
    CreateRecipeComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    CreateRecipeComponent
  ]
})
export class CreateRecipeModule {
}
