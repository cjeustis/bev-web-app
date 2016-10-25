import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  password_confirm: string;
}

@Component({
  selector: 'as-signup',
  templateUrl: 'app/signup/signup.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignUpComponent {
  private _registerForm: FormGroup;

  constructor(fb: FormBuilder) {
    this._registerForm = fb.group({
      'username': [null, Validators.required],
      'email': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
      'password_confirm': [null, Validators.compose([Validators.required])]
    });
  }

  /*
    TODO: Send request to API
  */
  public registerUser(data: IRegisterForm) {
    console.log('Form data: ', data);
  }
}
