import { AppHttpLoading } from '../../app-http-loading/app-http-loading.interface';

export interface State {
  // tslint:disable-next-line: no-any
  fakeData: any;
  appHttpLoading: AppHttpLoading;
}

export const initialState: State = {
  fakeData: null,
  appHttpLoading: {
    isLoading: false,
    isLoaded: false
  }
};
