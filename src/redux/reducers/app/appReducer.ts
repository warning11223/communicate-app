import {AppThunk} from '../../reduxStore';
import { getAuthMeThunk } from '../auth/authReducer';

export type ActionsAppReducerType = InitializeAppACType

type StateType = {
    initialized: boolean
}

const initialState = {
    initialized: false
}

export const appReducer = (state: StateType = initialState, action: ActionsAppReducerType): StateType => {
        switch (action.type) {
            case 'INITIALIZE-APP': {
                return {...state, initialized: true}
            }
            default:
                return state
        }
}

export type InitializeAppACType = ReturnType<typeof initializeAppAC>

export const initializeAppAC = () => ({
    type: 'INITIALIZE-APP'
} as const)

export const initializeAppTC = (): AppThunk => dispatch => {
    const promise = dispatch(getAuthMeThunk())
    Promise.all([promise])
        .then(() => {
            dispatch(initializeAppAC())
        })
}
