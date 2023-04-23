import {authAC, authReducer, logoutAC} from '../reducers/authReducer';
import {appReducer, initializeAppAC} from '../reducers/appReducer';

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
