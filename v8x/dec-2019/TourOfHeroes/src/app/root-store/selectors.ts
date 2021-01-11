import { createSelector, MemoizedSelector } from '@ngrx/store';
// import { MyFeatureStoreSelectors } from './my-feature-store';

import * as MyLoginSelectors from '../routes/login/slice/selectors';
import * as LoginFeatureState from './root-state';

// import { MyOtherFeatureStoreSelectors } from './my-other-feature-store';

// export const selectError: MemoizedSelector<object, string> = createSelector(
//   MyLoginSelectors.selectLoginError,
//   MyOtherFeatureStoreSelectors.selectMyOtherFeatureError,
//   (myFeatureError: string, myOtherFeatureError: string) => {
//     return myFeatureError || myOtherFeatureError;
//   }
// );

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyLoginSelectors.selectLoginError,
  (loginError: string) => {
    return loginError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  MyLoginSelectors.selectLoginIsLoading,
  (loginIsLoading: boolean) => {
    return loginIsLoading;
  }
);

export const selectIsLoaded: MemoizedSelector<
  object,
  boolean
> = createSelector(
  MyLoginSelectors.selectLoginIsLoaded,
  (loginIsLoaded: boolean) => {
    return loginIsLoaded;
  }
);

// export const selectIsLoading: MemoizedSelector<
//   object,
//   boolean
// > = createSelector(
//   MyFeatureStoreSelectors.selectMyFeatureIsLoading,
//   MyOtherFeatureStoreSelectors.selectMyOtherFeatureIsLoading,
//   (myFeature: boolean, myOtherFeature: boolean) => {
//     return myFeature || myOtherFeature;
//   }
// );


