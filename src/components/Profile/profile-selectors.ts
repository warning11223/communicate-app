import {RootState} from '../../redux/reduxStore';

export const getProfile = (state: RootState) => {
    return state.profileReducer
}
export const getUserId = (state: RootState) => {
    return state.authReducer.id
}
export const getProfileError = (state: RootState) => {
    return state.profileReducer.error
}
