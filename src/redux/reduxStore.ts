import {applyMiddleware, combineReducers, createStore} from 'redux';
import {dialogsReducer} from '../reducers/dialogsReducer';
import {profileReducer} from '../reducers/profileReducer';
import {usersReducer} from '../reducers/usersReducer';
import {authReducer} from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
    authReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof reduxStore.dispatch


export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
