import {authAC, authReducer, logoutAC} from '../redux/reducers/auth/authReducer';
import {appReducer, initializeAppAC} from '../redux/reducers/app/appReducer';

let initialState: { initialized: boolean };

beforeEach(() => {
    initialState = {
        initialized: false
    }
})

it('user should be authorized', () => {
    const newState = appReducer(initialState, initializeAppAC())

    expect(newState.initialized).toBeTruthy()
});
