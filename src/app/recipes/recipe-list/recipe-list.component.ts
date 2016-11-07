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

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    // Get the user so we can show their recipes
    let user = this.userService.getUser();
    if (!user) {
      this.router.navigateByUrl('');
      return;
    }
    this._recipes = user.recipes;
  }

  public createRecipe() {
    this.router.navigateByUrl('createRecipe');
  }
}
