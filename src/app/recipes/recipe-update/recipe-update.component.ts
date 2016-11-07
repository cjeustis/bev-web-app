import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UserService, IUser } from '../../userProvider/user.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'as-recipe-update',
  templateUrl: 'app/recipes/recipe-update/recipe-update.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class UpdateRecipeComponent implements OnInit {
  private _user: IUser;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    // Get the user so we can show their recipes
    this._user = this.userService.getUser();
    if (!this._user) {
      this.router.navigateByUrl('');
      return;
    }
  }
}
