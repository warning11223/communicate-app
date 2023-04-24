import {getAuthMeAPI, loginAPI, logoutAPI} from '../../api/api';
import {AppThunk} from '../reduxStore';
import {stopSubmit} from 'redux-form';
import {setLoadingAC} from './profileReducer';

type LoadingType = 'idle' | 'loading' | 'error' | 'succeeded'

export type InitialAuthStateType = {
    email: null | string
    id: null | number
    login: null | string
    isAuth: null | boolean
    loading: LoadingType
}

export type AuthReducerActionsType = AuthACType | LogoutACType | SetAuthLoadingACType

export const initialState: InitialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
    loading: 'idle'
}

export const authReducer = (state = initialState, action: AuthReducerActionsType): InitialAuthStateType => {
    switch (action.type) {
        case 'GET_AUTH':
            return {...state, isAuth: true, loading: 'succeeded', ...action.payload}
        case 'LOGOUT':
            return {...action.payload, loading: 'succeeded'}
        case 'SET_LOADING':
            return {...state, loading: action.payload.value}
        default:
            return state;
    }
}

type AuthACType = ReturnType<typeof authAC>;
type LogoutACType = ReturnType<typeof logoutAC>;
type SetAuthLoadingACType = ReturnType<typeof setAuthLoadingAC>;

export const authAC = (email: string, id: number, login: string) => ({
    type: 'GET_AUTH', payload: {email, id, login}
} as const)

export const logoutAC = (email: string | null, id: number | null, login: string | null, isAuth: null | boolean) => ({
    type: 'LOGOUT', payload: {email, id, login, isAuth}
} as const)

export const setAuthLoadingAC = (value: LoadingType) => ({
    type: 'SET_LOADING', payload: { value }
} as const)

export const loginTC = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    dispatch(setAuthLoadingAC('loading'))
    const res = await loginAPI(email, password, rememberMe)
    dispatch(setAuthLoadingAC('succeeded'))

    if (res.resultCode === 0) {
        dispatch(getAuthMeThunk())
    } else {
        const message = res.messages.length > 0 ? res.messages[0] : 'Some error occurred';

        dispatch(stopSubmit('login', {_error: message}))
    }
}

export const logoutTC = (): AppThunk => async (dispatch) => {
    dispatch(setAuthLoadingAC('loading'))
    const res = await logoutAPI()
    dispatch(setAuthLoadingAC('succeeded'));

    if (res.resultCode === 0) {
        dispatch(logoutAC(null, null, null, false))
    }
}

export const getAuthMeThunk = (): AppThunk => async (dispatch) => {
    dispatch(setLoadingAC(true));

    const res = await getAuthMeAPI()

    dispatch(setLoadingAC(false));
    const {id, email, login} = res;

    if (email && id && login) {
        dispatch(authAC(email, id, login));
    }
}
