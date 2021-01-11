import { Login } from '../../../login/login.interface';

export interface State {
  login: Login | null;
}

export const initialState: State = {
  login: { uid: '', password: '' },
};
