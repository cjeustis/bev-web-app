import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UpdateRecipeComponent } from '../index';

@NgModule({
  declarations: [
    UpdateRecipeComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    UpdateRecipeComponent
  ]
})
export class UpdateRecipeModule {
}
