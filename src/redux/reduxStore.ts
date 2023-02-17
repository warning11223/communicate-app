import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from '../reducers/dialogsReducer';
import {profileReducer} from '../reducers/profileReducer';
import {usersReducer} from '../reducers/usersReducer';

const rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch


export const reduxStore = createStore(rootReducer);
