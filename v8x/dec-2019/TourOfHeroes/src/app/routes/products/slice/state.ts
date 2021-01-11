import { AppHttpLoading } from 'src/app/shared/app-http-loading/app-http-loading.interface';
import { Product } from '../product.interface';

export interface State {
  products: Array<Product> | null;
  appHttpLoading: AppHttpLoading;
}

export const initialState: State = {
  products: null,
  appHttpLoading: {
    isLoading: false,
    isLoaded: false
  }
};
