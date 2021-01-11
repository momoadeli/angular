import { HttpErrorResponse } from '@angular/common/http';

export function getClientMessage(error: Error): string {
  if (!navigator.onLine) {
    return 'No Internet Connection';
  }
  return error.message ? error.message : error.toString();
}

export function getClientStack(error: Error): string {
  return error.stack;
}

export function getServerMessage(error: HttpErrorResponse): string {
  return error.message;
}

export function getServerStack(error: HttpErrorResponse): string {
  // handle stack trace
  return 'stack';
}
