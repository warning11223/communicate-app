import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from '../reducers/dialogsReducer';
import {profileReducer} from '../reducers/profileReducer';
import {usersReducer} from '../reducers/usersReducer';
import {authReducer} from '../reducers/authReducer';

const rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
    authReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof reduxStore.dispatch


export const reduxStore = createStore(rootReducer);
