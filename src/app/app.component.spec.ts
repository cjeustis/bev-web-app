import { RouterTestingModule } from '@angular/router/testing';
import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { provideRoutes, Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'as-test-cmp',
  template: '<div class="title">Ayyye</div>'
})
class TestRouterComponent {
}

let config: Routes = [
  {
    path: '', component: TestRouterComponent
  }
];
