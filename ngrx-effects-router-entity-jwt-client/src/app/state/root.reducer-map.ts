import { appFeatureKey, appReducer } from '@app/state/app.reducers';
import { LoginState } from '@login/state';
import { AppState } from '@app/state';
import { loginFeatureKey, loginReducer } from '@login/state';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { routerFeatureKey } from '@app/state/router/router-url.state';

export interface RootState {
    [appFeatureKey]: AppState;
    [loginFeatureKey]: LoginState;
    [routerFeatureKey]: RouterReducerState;
}

export const rootReducerMap = {
    [appFeatureKey]: appReducer,
    [loginFeatureKey]: loginReducer,
    [routerFeatureKey]: routerReducer
};
