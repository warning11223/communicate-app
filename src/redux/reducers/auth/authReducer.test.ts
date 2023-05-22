import {authAC, authReducer, InitialAuthStateType, logoutAC} from './authReducer';

let initialState: InitialAuthStateType;

beforeEach(() => {
    initialState = {
        id: 1,
        login: '',
        isAuth: false,
        email: '',
        loading: 'idle',
        error: ''
    }
})

it('user should be authorized', () => {
    const newState = authReducer(initialState, authAC('hello', 1, 'hello'))

    expect(newState.login).toBe('hello')
    expect(newState.email).toBe('hello')
    expect(newState.id).toBe(1)
    expect(newState.isAuth).toBe(true)
});

it('logout user', () => {
    const newState = authReducer(initialState, logoutAC('hello', 1, 'hello', false))

    expect(newState.login).toBe('hello')
    expect(newState.email).toBe('hello')
    expect(newState.id).toBe(1)
    expect(newState.isAuth).toBe(false)
});
