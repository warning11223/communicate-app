import {combineReducers, createStore} from 'redux';
import {dialogsReducer} from './dialogsReducer';
import {profileReducer} from './profileReducer';

const rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
})

export type RootState = ReturnType<typeof reduxStore.getState>
export type AppDispatch = typeof reduxStore.dispatch


export const reduxStore = createStore(rootReducer);
