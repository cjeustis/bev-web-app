import {Component, OnInit} from "@angular/core";
import {RouteConfig, RouterLink, ROUTER_DIRECTIVES} from "@angular/router-deprecated";

import {TaskListComponent} from "./todo/components/task-list.component";
import {AboutComponent} from "./about/components/about.components";

import { MDL } from './MaterialDesignLiteUpgradeElement';

declare var __moduleName: string;

@Component({
  moduleId: __moduleName,
  selector: "app",
  templateUrl: "./app.html",
  directives: [TaskListComponent, AboutComponent, RouterLink, ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/tasks', component: TaskListComponent, as: 'TaskList'},
  {path: '/about', component: AboutComponent, as: 'About'}
])
export class AppComponent implements OnInit {
  ngOnInit() {
    console.log("Application component initialized ...");
  }
}