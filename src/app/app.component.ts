import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard/dashboard.component';
import {RecipesComponent} from './recipes/recipes.component';
import {SigninComponent} from './signIn/signin.component';
import {SignupComponent} from './signUp/signup.component';

import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
  directives: [MDL, ROUTER_DIRECTIVES, RouterLink, SignupComponent, SigninComponent],
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: './app.html',
})

@RouteConfig([
  {as: 'Home', component: DashboardComponent, path: '/', useAsDefault: true},
  {as: 'SignIn', component: SigninComponent, path: '/signin'},
  {as: 'SignUp', component: SignupComponent, path: '/signup'},
  {as: 'Recipes', component: RecipesComponent, path: '/recipes'}
])

export class AppComponent implements OnInit {

  public authenticated: boolean;

  ngOnInit() {
    this.authenticated = true;
  }
}
