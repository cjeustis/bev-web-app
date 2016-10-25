import { Component, ChangeDetectionStrategy } from '@angular/core';

interface IRecipe {
  name: string;
  ingredients: string[];
  imgUrl: string;
};

@Component({
  selector: 'as-recipes',
  templateUrl: 'app/recipes/recipes.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipesComponent {
  public recipes = [] as IRecipe[];

  constructor() {
    // Create a couple recipes
    let recipe1: IRecipe = {
      name: 'Manhattan',
      ingredients: [
        'Whiskey',
        'Sweet Vermouth',
        'Bitters'
      ],
      imgUrl: 'http://liquor.s3.amazonaws.com/wp-content/uploads/2012/06/bulleit-perfect-manhattan1.jpg'
    };
    let recipe2: IRecipe = {
      name: 'Grateful Dead',
      ingredients: [
        'Tequila',
        'Vodka',
        'Run',
        'Gin',
        'Raspberry Liqueur'
      ],
      imgUrl: 'http://therumpus.net/wp-content/uploads/2015/06/RiG6yG9oT.png'
    };

    this.recipes.push(recipe1);
    this.recipes.push(recipe2);
  }

}
