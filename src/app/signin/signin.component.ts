import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService, IUser } from '../userProvider/user.provider';

interface ILoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'as-signin',
  templateUrl: 'app/signin/signin.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class SignInComponent implements OnInit {
  private _loginForm: FormGroup;
  private _response: string;

  constructor(private _fb: FormBuilder, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this._loginForm = this._fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }


  public loginUser(data: ILoginForm) {
    this._userService.loginUser(data.username, data.password)
      .subscribe((user: IUser) => {
        this._router.navigateByUrl('recipes');
      }, (err: any) => {
        this._response = err;
        console.log(err);
      });
  }
}
