import { AppHttpLoading } from 'src/app/shared/app-http-loading/app-http-loading.interface';

export interface State {
  appHttpLoading: AppHttpLoading;
}

export const initialState: State = {
  appHttpLoading: {
    isLoading: false,
    isLoaded: false
  }
};
