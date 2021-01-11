import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from '../../shared/user.interface';
import { ENUM_LOGIN_FAKE} from './login.fake';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(uid: string, passsword: string): Observable<User> {

    return of({ uid, userName: ENUM_LOGIN_FAKE.UID, timeLoggedIn: ENUM_LOGIN_FAKE.PWD })
      .pipe(
        delay(2000) // simulate http api delay (with global state swirl)
      );
  }

  logout(): Observable<User> {

    return of({})
      .pipe(
        delay(2000) // simulate http api delay (with global state swirl)
      );
  }
}

