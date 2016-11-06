import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IIngredients {
  id: number;
  recipeID: number;
  name: string;
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
export class UserService {

  public authenticated: boolean = false;
  private _user: IUser;
  private _apiUrl: string = 'http://localhost:8888/api/users';

  constructor(private http: Http) {
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

    return this.http.post(this._apiUrl + '/login', params, options)
      .map((res: Response) => {
        this._user = res.json();
        console.log('user set: ', this._user);
        this.authenticated = true;
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
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

    return this.http.post(this._apiUrl + '/register', params, options)
      .map((res: Response) => {
        this._user = res.json();
        console.log('user created: ', this._user);
        this.authenticated = true;
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  /* Log out a user - redirects to home */
  public signOutUser(): Observable<any> {
    return this.http.post(this._apiUrl + '/' + this._user.id + '/logout', null, null)
      .map((res: Response) => {
        console.log('user logged out: ', res);
        this.authenticated = false;
        return res.json();
      })
      .catch((error: any) => {
        return Observable.throw(error.json().error || 'Server error');
      });
  }

  /* Allow access to the currently logged-in user */
  public getUser() {
    return this._user;
  }
}
