
export type InitialAuthStateType = {
    email: null | string
    id: null | number
    login: null | string
    isAuth: null | boolean
}

export type ActionsType = AuthACType

export const initialState: InitialAuthStateType = {
    email: null,
    id: null,
    login: null,
    isAuth: false,
}

export const authReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'GET_AUTH':
            return {
                ...state,
                isAuth: true,
                ...action.payload
            }
        default:
            return state;
    }
}

type AuthACType = ReturnType<typeof authAC>;

export const authAC = (email: string, id: number, login: string) => ({
    type: 'GET_AUTH', payload: { email, id, login }
} as const)
