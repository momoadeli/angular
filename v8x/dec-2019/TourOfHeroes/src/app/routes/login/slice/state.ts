import { AppHttpLoading } from 'src/app/shared/app-http-loading/app-http-loading.interface';
import { User } from '../../../shared/user.interface';

export interface State {
  user: User | null;
  appHttpLoading: AppHttpLoading;
}

export const initialState: State = {
  user: null,
  appHttpLoading: {
    isLoading: false,
    isLoaded: false
  }
};

