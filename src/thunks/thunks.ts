import {AppDispatch} from '../redux/reduxStore';
import {followUserAPI, getAuthMeAPI, getUserProfile, getUsersAPI, unFollowUserAPI} from '../api/api';
import {setLoading, updateUserProfile} from '../reducers/profileReducer';
import {followUserAC, setFollowingUserAC, setUsersAC, unfollowUserAC} from '../reducers/usersReducer';
import {authAC} from '../reducers/authReducer';

export const getUserProfileThunk = (id: string) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));
    getUserProfile(id)
        .then(response => {
            dispatch(setLoading(false));
            dispatch(updateUserProfile(response.data));
        })
}

export const getUsersThunk = (pageSize: number, index: number) => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    getUsersAPI(pageSize, index + 1)
        .then(response => {
            dispatch(setUsersAC(response.items));
            dispatch(setLoading(false));
        });
}

export const followUserThunk = (id: number) => (dispatch: AppDispatch) => {
    dispatch(setFollowingUserAC(true, id));

    followUserAPI(id)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(followUserAC(id));
            }
            dispatch(setFollowingUserAC(false, id));
        })
}

export const unFollowUserThunk = (id: number) => (dispatch: AppDispatch) => {
    dispatch(setFollowingUserAC(true, id));

    unFollowUserAPI(id)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowUserAC(id));
            }
            dispatch(setFollowingUserAC(false, id));
        })
}

export const getAuthMeThunk = () => (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    getAuthMeAPI()
        .then(response => {
            dispatch(setLoading(false));
            const {id, email, login} = response;

            if (email && id && login) {
                dispatch(authAC(email, id, login));
            }
        })
}
