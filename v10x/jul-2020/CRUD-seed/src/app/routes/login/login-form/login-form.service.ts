import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { User } from 'src/app/shared/user.interface';
import * as RootStoreState from '../../../shared/root-store/root-state';
import { Login } from '../login.interface';
import * as LoginFormActions from './slice/actions';
import * as LoginFormSelectors from './slice/selectors';

@Injectable()
export class LoginFormService implements OnDestroy {

  destroy$: Subject<boolean> = new Subject<boolean>();

  _loginForm: FormGroup = null;

  get loginForm(): FormGroup {
    return this._loginForm;
  }

  set loginForm(form: FormGroup) {
    this._loginForm = form;
  }

  constructor(private fb: FormBuilder, private store: Store<RootStoreState.State>) {
    this.initForm();
    this.subscribeLoginFormStoreSlice();

  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  initForm(): void {

    this.loginForm = this.fb.group({
      uid: ['', Validators.required],
      pwd: ['', Validators.required]
    });

    this.loginForm.valueChanges
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((login: Login) => {
        // this merely updates fomr slice for later retrieval:
        this.store.dispatch(new LoginFormActions.LoginFormUpdate({ login }));
      });

  }

  subscribeLoginFormStoreSlice(): void {
    this.store.select(
      LoginFormSelectors.selectLogin
    )
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe((user: User) => {
        this.loginForm.patchValue(user, { emitEvent: false });
      });

  }

}
