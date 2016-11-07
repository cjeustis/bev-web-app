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

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {
  }

  ngOnInit() {
    this._registerForm = this.fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'password_confirm': [null, Validators.compose([Validators.required])]
    });
  }

  /*
    TODO: Send request to API
  */
  public registerUser(data: IRegisterForm) {
    this.userService.registerUser(data.username, data.email, data.password)
      .subscribe((res: any) => {
        if (res.message) {
          this._response = res.message;
          return;
        }
        this.router.navigateByUrl('recipes');
      }, (err: any) => {
        this._response = err;
        console.log(err);
      });
  }
}
