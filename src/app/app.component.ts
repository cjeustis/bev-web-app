import {Component, OnInit} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouterLink} from '@angular/router-deprecated';

import {DashboardComponent} from './dashboard/dashboard.component';
// import {GraphService} from './graphService/graph.service';
import {SigninComponent} from './signIn/signin.component';
import {SignupComponent} from './signUp/signup.component';

import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
  directives: [ROUTER_DIRECTIVES, RouterLink, SignupComponent, SigninComponent],
  moduleId: __moduleName,
  selector: 'app',
  templateUrl: './app.html',
  // providers: [GraphService]
})

@RouteConfig([
  {as: 'Home', component: DashboardComponent, path: '/', useAsDefault: true},
  {as: 'SignIn', component: SigninComponent, path: '/signin'},
  {as: 'SignUp', component: SignupComponent, path: '/signup'}
])
export class AppComponent implements OnInit {

  // constructor(private graphService: GraphService) {

  // }

  ngOnInit() {

  }
}
