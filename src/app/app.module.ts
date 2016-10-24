import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_PROVIDERS } from './app.providers';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavbarModule } from './shared';
import { HomeModule } from './home/home.module';
import { TempPlotModule } from './temp-plot/temp-plot.module';
import { SignUpModule } from './signup/signup.module';
import { SignInModule } from './signin/signin.module';
import { RecipesModule } from './recipes/recipes.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    HomeModule,
    TempPlotModule,
    SignUpModule,
    SignInModule,
    RecipesModule,
    routing
  ],
  providers: [ APP_PROVIDERS ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
