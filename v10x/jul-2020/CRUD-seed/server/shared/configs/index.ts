import { setHeaders } from './set-headers.config';

/* export configs array */
// tslint:disable-next-line: no-any
export const configs: ReadonlyArray<(req: any, res: any, next: any) => void> = [
  setHeaders
];
