import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UserService, IUser } from '../../userProvider/user.provider';

@Component({
  selector: 'as-recipes',
  templateUrl: 'app/recipes/recipe-list/recipe-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecipesComponent implements OnInit {
  private _user: IUser;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    // Get the user so we can show their recipes
    this._user = this.userService.getUser();
  }
}
