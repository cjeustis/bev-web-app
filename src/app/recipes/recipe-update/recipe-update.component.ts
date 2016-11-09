import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UserProvider, IUser } from '../../Providers/user-provider/user.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'as-recipe-update',
  templateUrl: 'app/recipes/recipe-update/recipe-update.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class UpdateRecipeComponent implements OnInit {
  private _user: IUser;

  constructor(private _userService: UserProvider, private _router: Router) {
  }

  ngOnInit() {
    // Get the user so we can show their recipes
    this._user = this._userService.getUser();
    if (!this._user) {
      this._router.navigateByUrl('');
      return;
    }
  }
}
