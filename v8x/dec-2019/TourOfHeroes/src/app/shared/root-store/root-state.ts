import * as httpErrorFeature from '../../routes/http-error/slice/state';
import * as loginFormFeatureState from '../../routes/login/login-form/slice/state';
import * as loginFeatureState from '../../routes/login/slice/state';
import * as productsFeatureState from '../../routes/products/slice/state';

export interface State {
  httpErrorFeature: httpErrorFeature.State;
  loginFeature: loginFeatureState.State;
  loginFormFeature: loginFormFeatureState.State;
  productsFeature: productsFeatureState.State;
}
