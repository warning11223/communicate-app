import {AppThunk} from '../../reduxStore';
import {stopSubmit} from 'redux-form';
import {setLoadingAC} from '../profile/profileReducer';
import {networkAPI} from '../../../api/api';

type LoadingType = 'idle' | 'loading' | 'error' | 'succeeded'

export type InitialAuthStateType = {
    email: null | string
    id: null | number
    login: null | string
    isAuth: null | boolean
    loading: LoadingType
    captcha?: string
    error: string
}

export type AuthReducerActionsType = AuthACType | LogoutACType | SetAuthLoadingACType | SetCaptchaType | SetAuthErrorType

export const initialState: InitialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    loading: 'idle',
    captcha: '',
    error: ''
}

export const authReducer = (state = initialState, action: AuthReducerActionsType): InitialAuthStateType => {
    switch (action.type) {
        case 'GET_AUTH':
            return {...state, isAuth: true, loading: 'succeeded', ...action.payload}
        case 'LOGOUT':
            return {...action.payload, loading: 'succeeded', error: ''}
        case 'SET_LOADING':
            return {...state, loading: action.payload.value}
        case 'SET_CAPTCHA':
            return {...state, captcha: action.payload.captcha}
        case 'SET_AUTH_ERROR':
            return {...state, error: action.payload.error}
        default:
            return state;
    }
}

type AuthACType = ReturnType<typeof authAC>;
type LogoutACType = ReturnType<typeof logoutAC>;
type SetAuthLoadingACType = ReturnType<typeof setAuthLoadingAC>;
type SetCaptchaType = ReturnType<typeof setCaptchaAC>;
type SetAuthErrorType = ReturnType<typeof setAuthErrorAC>;

export const authAC = (email: string, id: number, login: string) => ({
    type: 'GET_AUTH', payload: {email, id, login}
} as const)

export const logoutAC = (email: string | null, id: number | null, login: string | null, isAuth: null | boolean) => ({
    type: 'LOGOUT', payload: {email, id, login, isAuth}
} as const)

export const setAuthLoadingAC = (value: LoadingType) => ({
    type: 'SET_LOADING', payload: { value }
} as const)

export const setCaptchaAC = (captcha: string) => ({
    type: 'SET_CAPTCHA', payload: { captcha }
} as const)

export const setAuthErrorAC = (error: string) => ({
    type: 'SET_AUTH_ERROR', payload: { error }
} as const)

export const loginTC = (email: string, password: string, rememberMe: boolean, captcha: string): AppThunk => async (dispatch) => {
    try {
        dispatch(setAuthLoadingAC('loading'))
        const res = await networkAPI.loginAPI(email, password, rememberMe, captcha)
        dispatch(setAuthLoadingAC('succeeded'))

        if (res.resultCode === 0) {
            dispatch(getAuthMeThunk())
        } else {
            if (res.resultCode === 10) {
                dispatch(getCaptchaThunk())
            }
            const message = res.messages.length > 0 ? res.messages[0] : 'Some error occurred'

            dispatch(stopSubmit('login', {_error: message}))
        }
    } catch ({ message }) {
        if (typeof message === 'string') dispatch(setAuthErrorAC(message))
        dispatch(setAuthLoadingAC('error'))

        setTimeout(() => {
            dispatch(setAuthErrorAC(''))
        }, 1000)
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    try {
        dispatch(setAuthLoadingAC('loading'))
        const res = await networkAPI.logoutAPI()
        dispatch(setAuthLoadingAC('succeeded'));

        if (res.resultCode === 0) {
            dispatch(logoutAC(null, null, null, false))
        }
    } catch ({ message }) {
        if (typeof message === 'string') {
            dispatch(setAuthErrorAC(message))
            dispatch(setAuthLoadingAC('error'))
            dispatch(setLoadingAC(false))

            setTimeout(() => {
                dispatch(setAuthErrorAC(''))
            }, 1000)
        }
    }
}

export const getAuthMeThunk = (): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoadingAC(true));

        const res = await networkAPI.getAuthMeAPI()

        dispatch(setLoadingAC(false));
        const {id, email, login} = res;

        if (email && id && login) {
            dispatch(authAC(email, id, login));
        }
    } catch ({ message }) {
        if (typeof message === 'string') {
            dispatch(setAuthErrorAC(message))
            dispatch(setAuthLoadingAC('error'));

            setTimeout(() => {
                dispatch(setAuthErrorAC(''))
            }, 1000)
        }
    }
}

export const getCaptchaThunk = (): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoadingAC(true))

        const res = await networkAPI.getCaptcha()
        dispatch(setCaptchaAC(res.data.url))

        dispatch(setLoadingAC(false))
    } catch ({ message }) {
        if (typeof message === 'string') {
            dispatch(setAuthErrorAC(message))
            dispatch(setAuthLoadingAC('error'));

            setTimeout(() => {
                dispatch(setAuthErrorAC(''))
            }, 1000)
        }
    }

}
