import {RootState} from '../../redux/reduxStore';

export const getAuthData = (state: RootState) => {
    return state.authReducer
}
