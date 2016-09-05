import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignupComponent} from "./signUp/signup.component";
import {SigninComponent} from "./signIn/signin.component";

import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: "app",
  templateUrl: "./app.html",
  directives: [SignupComponent, SigninComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', component: DashboardComponent, as: 'Home', useAsDefault: true},
  {path: '/signin', component: SigninComponent, as: 'SignIn'},
  {path: '/signup', component: SignupComponent, as: 'SignUp'}
])
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("Application component initialized ...");
  }
}