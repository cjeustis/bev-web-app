import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../userProvider/user.provider';

@Component({
  selector: 'as-navbar',
  templateUrl: 'app/navbar/navbar.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class NavbarComponent {
  @Input() brand: string;
  private _response: string;

  constructor(private userService: UserService, private router: Router) {
  }

  public signOut(): void {
    this.userService.signOutUser()
      .subscribe((res: any) => {
        console.log(res);
        this.router.navigateByUrl('/');
      }, (err: any) => {
        this._response = err;
        console.log(err);
      });
  }
}
