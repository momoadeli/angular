import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { User } from '../../shared/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(uid: string, password: string): Observable<User> {

    // return of({ uid, userName: ENUM_LOGIN_FAKE.UID, timeLoggedIn: ENUM_LOGIN_FAKE.PWD })
    //   .pipe(
    //     delay(2000) // simulate http api delay (with global state swirl)
    //   );

    // return of({ uid, userName: uid, timeLoggedIn: '3773' })
    //   .pipe(
    //     delay(2000) // simulate http api delay (with global state swirl)
    //   );

    return this.http.get('http://localhost:3000/api/login')
      // tslint:disable-next-line: no-any
      .pipe(map( (res: any) => res.data));
  }

  logout(): Observable<User> {

    return of({})
      .pipe(
        delay(2000) // simulate http api delay (with global state swirl)
                    // possibky cleanup local storage
      );
  }
}

