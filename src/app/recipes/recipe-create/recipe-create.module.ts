import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateRecipeComponent } from '../index';

@NgModule({
  declarations: [
    CreateRecipeComponent
  ],
  imports: [
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [
    CreateRecipeComponent
  ]
})
export class CreateRecipeModule {
}
