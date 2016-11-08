import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UserService, IRecipe } from '../../userProvider/user.provider';
import { Router } from '@angular/router';

@Component({
  selector: 'as-recipes',
  templateUrl: 'app/recipes/recipe-list/recipe-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class RecipesComponent implements OnInit {
  private _recipes: IRecipe[];

  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    // Get the user so we can show their recipes
    let user = this._userService.getUser();
    if (!user) {
      this._router.navigateByUrl('');
      return;
    }
    this._recipes = user.recipes;
  }

  public createRecipe() {
    this._router.navigateByUrl('createRecipe');
  }
}
