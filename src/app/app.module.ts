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
import { RecipesModule } from './recipes/recipe-list/recipe-list.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpModule,
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
