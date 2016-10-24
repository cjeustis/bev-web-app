import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RecipesComponent } from './index';

@NgModule({
  declarations: [
    RecipesComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    RecipesComponent
  ]
})
export class RecipesModule {
}
