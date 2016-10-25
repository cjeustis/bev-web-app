import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface ILoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'as-signin',
  templateUrl: 'app/signin/signin.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignInComponent {
  private _loginForm: FormGroup;

  constructor(fb: FormBuilder) {
    this._loginForm = fb.group({
      'username': [null, Validators.required],
      'password': [null, Validators.compose([Validators.required, Validators.minLength(8)])],
    });
  }

  /*
    TODO: Send request to API
  */
  public loginUser(data: ILoginForm) {
    console.log('Form data: ', data);
  }
}
