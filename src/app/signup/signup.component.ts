import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../userProvider/user.provider';

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
}

@Component({
  selector: 'as-signup',
  templateUrl: 'app/signup/signup.html',
  changeDetection: ChangeDetectionStrategy.Default
})
export class SignUpComponent implements OnInit {
  private _registerForm: FormGroup;
  private _response: string;

  constructor(private _fb: FormBuilder, private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this._registerForm = this._fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'password_confirm': [null, Validators.compose([Validators.required])]
    });
  }

  public registerUser(data: IRegisterForm) {
    this._userService.registerUser(data.username, data.email, data.password)
      .subscribe((res: any) => {
        if (res.message) {
          this._response = res.message;
          return;
        }
        this._router.navigateByUrl('recipes');
      }, (err: any) => {
        this._response = err;
        console.log(err);
      });
  }
}
