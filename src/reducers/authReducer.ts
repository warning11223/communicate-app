import {loginAPI, logoutAPI} from '../api/api';
import {getAuthMeThunk} from '../thunks/thunks';

export type InitialAuthStateType = {
    email: null | string
    id: null | number
    login: null | string
    isAuth: null | boolean
}

export type ActionsType = AuthACType | LogoutACType

export const initialState: InitialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsType): InitialAuthStateType => {
    switch (action.type) {
        case 'GET_AUTH':
            return {...state, isAuth: true, ...action.payload}
        case 'LOGOUT':
            return {...action.payload}
        default:
            return state;
    }
}

type AuthACType = ReturnType<typeof authAC>;
type LogoutACType = ReturnType<typeof logoutAC>;

export const authAC = (email: string, id: number, login: string) => ({
    type: 'GET_AUTH', payload: {email, id, login}
} as const)

export const logoutAC = (email: string | null, id: number | null, login: string | null, isAuth: null | boolean) => ({
    type: 'LOGOUT', payload: {email, id, login, isAuth}
} as const)


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: any) => {
    loginAPI(email, password, rememberMe)
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(getAuthMeThunk())
            }
        })
}

export const logoutTC = () => (dispatch: any) => {
    logoutAPI()
        .then(res => {
            if (res.resultCode === 0) {
                dispatch(logoutAC(null, null, null, false))
            }
        })
}
