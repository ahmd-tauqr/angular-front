import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  LoginForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.LoginForm = this.fb.group({
      username: [
        '',
        Validators.compose([Validators.required, Validators.minLength(2)]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      rememberMe: [true],
    });
  }

  get lf() {
    return this.LoginForm as FormGroup;
  }

  login() {
    if (this.LoginForm.valid) {
      const loginCredentials = this.LoginForm.value;
      console.log('Form values:=====>', loginCredentials);
    } else {
      console.log('validation errors');
    }
  }
}
