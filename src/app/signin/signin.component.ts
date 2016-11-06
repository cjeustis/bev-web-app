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
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class SignInComponent implements OnInit {
  private _loginForm: FormGroup;
  private _response: string;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this._loginForm = this.fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
    });
  }


  public loginUser(data: ILoginForm) {
    this.userService.loginUser(data.username, data.password)
      .subscribe((user: IUser) => {
        this.router.navigateByUrl('recipes');
      }, (err: any) => {
        this._response = err;
        console.log(err);
      });
  }
}
