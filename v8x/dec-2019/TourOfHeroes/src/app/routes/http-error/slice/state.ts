import { HttpErrorResponse } from '@angular/common/http';


export interface State {
  httpError: HttpErrorResponse | null;
}

export const initialState: State = {
  httpError: null
};
