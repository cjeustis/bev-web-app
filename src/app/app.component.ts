import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.components";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {SignupComponent} from "./signUp/signup.component";
import {SigninComponent} from "./signIn/signin.component";

import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: "app",
  templateUrl: "./app.html",
  directives: [TaskListComponent, AboutComponent, SignupComponent, SigninComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/', component: DashboardComponent, as: 'Home', useAsDefault: true},
  {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
  {path: '/about', component: AboutComponent, as: 'About'},
  {path: '/signin', component: SigninComponent, as: 'SignIn'},
  {path: '/signup', component: SignupComponent, as: 'SignUp'}
])
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("Application component initialized ...");
  }
}