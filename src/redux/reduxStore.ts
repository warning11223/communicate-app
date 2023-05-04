import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {dialogsReducer} from './reducers/dialogsReducer';
import {profileReducer, ProfileReducerActionsType} from './reducers/profileReducer';
import {usersReducer, UsersReducerActionsType} from './reducers/usersReducer';
import {authReducer, AuthReducerActionsType} from './reducers/authReducer';
import thunk, {ThunkAction} from 'redux-thunk';
import {reducer as formReducer, stopSubmit} from 'redux-form'
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {DialogsReducerActionsType} from './state';
import {ActionsAppReducerType, appReducer} from './reducers/appReducer';

const rootReducer = combineReducers({
    dialogsReducer,
    profileReducer,
    usersReducer,
    authReducer,
    appReducer,
    form: formReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof reduxStore.dispatch

type DispatchFunc = () => AppDispatch
export const useAppDispatch: DispatchFunc = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export type StopSubmitType = ReturnType<typeof stopSubmit>;
type AppActions = DialogsReducerActionsType | AuthReducerActionsType | ProfileReducerActionsType | UsersReducerActionsType | StopSubmitType | ActionsAppReducerType;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AppActions>

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const reduxStore = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
