import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  logError(err: Error): void {
    this.logToLocalStorage(err);
    this.logToSessionStorage(err);
    this.logToRemoteLogger(err);

  }

  private logToLocalStorage(err: Error): void {
    // here log proper localStorage keys
    const _stack = err.stack;
  }


  private logToSessionStorage(err: Error): void {
    // here log proper sessionStorage keys
    const _stack = err.stack;
  }

  private logToRemoteLogger(err: Error): void {
    // log remote tracker such as Slack or Sentry
    const _stack = err.stack;
  }
}
