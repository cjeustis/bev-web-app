import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IIngredients {
  id: number;
  recipeID: number;
  name: string;
  amount: number;
  notes: string;
  apiUrl: string; // turn into function
};

export interface IRecipe {
  id: number;
  userID: number;
  name: string;
  imageUrl: string;
  ingredients: IIngredients[];
  apiUrl: string; // turn into function
};

export interface IUser {
  id: number;
  username: string;
  email: string;
  recipes: IRecipe[];
  token: string;
  apiUrl: string; // turn into function
};

@Injectable()
export class UserProvider {

  public authenticated: boolean = false;
  private _user: IUser;
  private _apiUrl: string = 'http://localhost:8888/api/users';
  private _token: string;

  constructor(private _http: Http) {
  }

  /* Log in a user - requires username and password */
  public loginUser(username: string, password: string): Observable<IUser> {
    let params = JSON.stringify({
      username: username,
      password: password
    });

    let options = new RequestOptions({
      headers: new Headers({
        'Content-type': 'application/json'
      })
    });

    return this._http.post(this._apiUrl + '/login', params, options)
      .map((res: Response) => {
        this._user = res.json().user;
        this._token = res.json().token;
        this.authenticated = true;
        return this._user;
      })
      .catch((error: any) => {
        console.log('error: ', error);
        return Observable.throw(error.json().message || 'Unable to complete request.');
      });
  }

  /* Register a new user - requires username, email, and password */
  public registerUser(username: string, email: string, password: string): Observable<IUser> {
    let params = JSON.stringify({
      username: username,
      email: email,
      password: password
    });

    let options = new RequestOptions({
      headers: new Headers({
      'Content-type': 'application/json'
      })
    });

    return this._http.post(this._apiUrl + '/register', params, options)
      .map((res: Response) => {
        this._user = res.json().user;
        this._token = res.json().token;
        this.authenticated = true;
        return this._user;
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Unable to complete request.');
      });
  }

  public createRecipe(recipe: IRecipe): Observable<any> {
    let options = new RequestOptions({
      headers: new Headers({
      'Content-type': 'application/json',
      'Auth-Token': this._token
      })
    });

    return this._http.post(this._apiUrl + '/' + this._user.id + '/recipes', JSON.stringify(recipe), options)
      .map((res: Response) => {
        // Add recipe to user
        this._user.recipes.push(res.json());
        return this._user;
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Unable to complete request.');
      });
  }

  /* Log out a user - redirects to home */
  public signOutUser(): Observable<any> {
    let options = new RequestOptions({
      headers: new Headers({
        'Content-type': 'application/json',
        'Auth-Token': this._token
      })
    });
    return this._http.post(this._apiUrl + '/' + this._user.id + '/logout', null, options)
      .map((res: Response) => {
        this.authenticated = false;
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Unable to complete request.');
      });
  }

  /* Allow access to the currently logged-in user */
  public getUser(): IUser {
    return this._user;
  }
}
