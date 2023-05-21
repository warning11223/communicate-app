import {AppThunk} from '../../reduxStore';
import {getAuthMeThunk} from '../auth/authReducer';

export type ActionsAppReducerType = InitializeAppACType | SetErrorAppACType

type StateType = {
    initialized: boolean
    error: string
}

const initialState = {
    initialized: false,
    error: ''
}

export const appReducer = (state: StateType = initialState, action: ActionsAppReducerType): StateType => {
        switch (action.type) {
            case 'INITIALIZE-APP': {
                return {...state, initialized: true}
            }
            case 'SET_APP_ERROR':
                return {...state, error: action.payload.error}
            default:
                return state
        }
}

export type InitializeAppACType = ReturnType<typeof initializeAppAC>
export type SetErrorAppACType = ReturnType<typeof setErrorAppAC>

export const initializeAppAC = () => ({
    type: 'INITIALIZE-APP'
} as const)

export const setErrorAppAC = (error: string) => ({
    type: 'SET_APP_ERROR', payload: { error }
} as const)

export const initializeAppTC = (): AppThunk => async (dispatch) => {
    try {
        const res = await dispatch(getAuthMeThunk())
        dispatch(initializeAppAC())
    } catch ({ message }) {
        if (typeof message === 'string') {
            dispatch(setErrorAppAC(message))

            setTimeout(() => {
                dispatch(setErrorAppAC(''))
            }, 1000)
        }
    }

    /*const promise = dispatch(getAuthMeThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initializeAppAC())
        })*/
}
