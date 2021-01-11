import * as httpErrorFeatureState from '../../routes/http-error/slice/state';
import * as loginFormFeatureState from '../../routes/login/login-form/slice/state';
import * as loginFeatureState from '../../routes/login/slice/state';
import * as productsFeatureState from '../../routes/products/slice/state';
import * as appHttpLoadingFeatureState from '../app-http-loading/slice/state';
import * as fakeHttpErrorFeatureState from '../fake-http-error/slice/state';

export interface State {
  appHttpLoadingFeature: appHttpLoadingFeatureState.State;
  fakeHttpErrorFeature: fakeHttpErrorFeatureState.State;
  httpErrorFeature: httpErrorFeatureState.State;
  loginFeature: loginFeatureState.State;
  loginFormFeature: loginFormFeatureState.State;
  productsFeature: productsFeatureState.State;
}
