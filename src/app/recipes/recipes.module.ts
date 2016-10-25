import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { RecipesComponent } from './index';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule {
}
