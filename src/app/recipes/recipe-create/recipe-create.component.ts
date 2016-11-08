import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { UserService, IUser, IRecipe } from '../../userProvider/user.provider';
import { Router } from '@angular/router';
import { FormGroup, FormArray, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'as-recipe-create',
  templateUrl: 'app/recipes/recipe-create/recipe-create.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class CreateRecipeComponent implements OnInit {
  private _createRecipeForm: FormGroup;
  private _user: IUser;
  private _response: string;

  constructor(private _fb: FormBuilder, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    // Get the user so we can show their recipes
    this._user = this._userService.getUser();
    if (!this._user) {
      this._router.navigateByUrl('');
      return;
    }
    this._createRecipeForm = this._fb.group({
      name: [''],
      imageUrl: [''],
      // name: ['', [Validators.required, Validators.minLength(5)]],
      // image: ['', Validators.required, Validators.minLength(5)],
      ingredients: this._fb.array([
        this.initIngredients()
      ])
    });
  }

  public createRecipe(recipe: IRecipe) {
    this._userService.createRecipe(recipe)
      .subscribe((user: any) => {
        console.log('response: ', user);
        // this._router.navigateByUrl('recipes');
      }, (err: any) => {
        this._response = err;
        console.log(err);
      });
  }

  public addIngredient() {
    const control = <FormArray>this._createRecipeForm.controls['ingredients'];
    control.push(this.initIngredients());
  }

  public removeIngredient(location: number) {
    const control = <FormArray>this._createRecipeForm.controls['ingredients'];
    control.removeAt(location);
  }

  private initIngredients() {
    return this._fb.group({
      name: [''],
      amount: [''],
      notes: ['', Validators.maxLength(255)]
    });
  }
}
