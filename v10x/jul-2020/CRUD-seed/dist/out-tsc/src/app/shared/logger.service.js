import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let LoggerService = class LoggerService {
    constructor() { }
    logError(err) {
        this.logToLocalStorage(err);
        this.logToSessionStorage(err);
        this.logToRemoteLogger(err);
    }
    logToLocalStorage(err) {
        // here log proper localStorage keys
        const _stack = err.stack;
    }
    logToSessionStorage(err) {
        // here log proper sessionStorage keys
        const _stack = err.stack;
    }
    logToRemoteLogger(err) {
        // log remote tracker such as Slack or Sentry
        const _stack = err.stack;
    }
};
LoggerService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], LoggerService);
export { LoggerService };
//# sourceMappingURL=logger.service.js.map