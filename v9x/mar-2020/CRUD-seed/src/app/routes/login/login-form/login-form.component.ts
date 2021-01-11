import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ENUM_LOGIN_FAKE } from '../login.fake';
import { Login } from '../login.interface';
import { LoginFormService } from './login-form.service';

@Component({
  selector: 'crud-seed-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  providers: [LoginFormService] // this makes service bound it this components life-cycle (not a singleton!)
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @Output() submitLogin: EventEmitter<Login> = new EventEmitter<Login>();

  loginFake: typeof ENUM_LOGIN_FAKE = ENUM_LOGIN_FAKE;
  loginForm: FormGroup = this.loginFormService.loginForm;

  constructor(private loginFormService: LoginFormService) { }

  ngOnInit(): void {
    // always clear form on entry. this will clear form slice too
    this.loginForm.reset();
  }

  submit(ev: Event): void {
    // this.submitLogin.emit({ uid: ENUM_LOGIN_FAKE.UID, password: ENUM_LOGIN_FAKE.PWD });
    this.submitLogin.emit(
      { uid: this.loginFormService._loginForm.controls.uid.value,
        password: this.loginFormService._loginForm.controls.pwd.value
      }
    );
  }

  ngOnDestroy(): void {

  }

}
