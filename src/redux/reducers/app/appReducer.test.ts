import {appReducer, initializeAppAC} from './appReducer';

let initialState: { initialized: boolean, error: string };

beforeEach(() => {
    initialState = {
        initialized: false,
        error: ''
    }
})

it('user should be authorized', () => {
    const newState = appReducer(initialState, initializeAppAC())

    expect(newState.initialized).toBeTruthy()
});
