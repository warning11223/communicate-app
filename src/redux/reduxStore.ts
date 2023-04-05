import {applyMiddleware, combineReducers, createStore} from 'redux';
import {dialogsReducer} from '../reducers/dialogsReducer';
import {profileReducer, ProfileReducerActionsType} from '../reducers/profileReducer';
import {usersReducer, UsersReducerActionsType} from '../reducers/usersReducer';
import {authReducer, AuthReducerActionsType} from '../reducers/authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer, stopSubmit} from 'redux-form'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {DialogsReducerActionsType} from './state';

const rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
    authReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof reduxStore.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type StopSubmitType = ReturnType<typeof stopSubmit>;
type AppActions = DialogsReducerActionsType | AuthReducerActionsType | ProfileReducerActionsType | UsersReducerActionsType | StopSubmitType;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>

export const reduxStore = createStore(rootReducer, applyMiddleware(thunk));
