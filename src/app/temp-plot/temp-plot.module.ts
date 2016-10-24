import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TempPlotComponent } from './index';

@NgModule({
  declarations: [
    TempPlotComponent
  ],
  imports: [
    RouterModule
  ],
  exports: [
    TempPlotComponent
  ]
})
export class TempPlotModule {
}
