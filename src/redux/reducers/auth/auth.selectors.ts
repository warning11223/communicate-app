import {RootState} from '../../reduxStore';

export const getCaptcha = (state: RootState) => state.authReducer.captcha;
export const getIsAuth = (state: RootState) => state.authReducer.isAuth;
