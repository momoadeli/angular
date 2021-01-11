import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
    }
    login(uid, password) {
        // return of({ uid, userName: ENUM_LOGIN_FAKE.UID, timeLoggedIn: ENUM_LOGIN_FAKE.PWD })
        //   .pipe(
        //     delay(2000) // simulate http api delay (with global state swirl)
        //   );
        return this.http
            .get('http://localhost:3000/api/login')
            .pipe(tap(x => {
            return x;
        }));
    }
    logout() {
        return of({})
            .pipe(delay(2000) // simulate http api delay (with global state swirl)
        );
    }
};
LoginService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login.service.js.map