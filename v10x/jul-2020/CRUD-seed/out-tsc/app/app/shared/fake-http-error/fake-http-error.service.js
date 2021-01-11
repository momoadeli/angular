import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let FakeHttpErrorService = class FakeHttpErrorService {
    constructor(http) {
        this.http = http;
    }
    fake() {
        return this.http.get('http://www.zhgdsfdsfsdf.com');
    }
};
FakeHttpErrorService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], FakeHttpErrorService);
export { FakeHttpErrorService };
//# sourceMappingURL=fake-http-error.service.js.map