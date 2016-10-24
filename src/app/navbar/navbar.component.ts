import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'as-navbar',
  templateUrl: 'app/navbar/navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
    @Input() brand: string;
}
