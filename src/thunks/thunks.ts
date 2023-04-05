import {AppDispatch, AppThunk} from '../redux/reduxStore';
import {
    followUserAPI,
    getAuthMeAPI,
    getUserProfileAPI,
    getUsersAPI,
    getUserStatusAPI,
    setUserStatusAPI,
    unFollowUserAPI
} from '../api/api';
import {getStatusAC, setLoadingAC, setStatusAC, updateUserProfileAC} from '../reducers/profileReducer';
import {followUserAC, setFollowingUserAC, setUsersAC, unfollowUserAC} from '../reducers/usersReducer';
import {authAC} from '../reducers/authReducer';

export const getUserProfileThunk = (id: string): AppThunk => dispatch => {
    dispatch(setLoadingAC(true));
    getUserProfileAPI(id)
        .then(response => {
            dispatch(setLoadingAC(false));
            dispatch(updateUserProfileAC(response.data));
        })
}

export const getUsersThunk = (pageSize: number, index: number): AppThunk => dispatch => {
    dispatch(setLoadingAC(true));

    getUsersAPI(pageSize, index + 1)
        .then(response => {
            dispatch(setUsersAC(response.items));
            dispatch(setLoadingAC(false));
        });
}

export const followUserThunk = (id: number): AppThunk => dispatch => {
    dispatch(setFollowingUserAC(true, id));

    followUserAPI(id)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(followUserAC(id));
            }
            dispatch(setFollowingUserAC(false, id));
        })
}

export const unFollowUserThunk = (id: number): AppThunk => dispatch => {
    dispatch(setFollowingUserAC(true, id));

    unFollowUserAPI(id)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(unfollowUserAC(id));
            }
            dispatch(setFollowingUserAC(false, id));
        })
}

export const getAuthMeThunk = (): AppThunk => dispatch => {
    dispatch(setLoadingAC(true));

    getAuthMeAPI()
        .then(response => {
            dispatch(setLoadingAC(false));
            const {id, email, login} = response;

            if (email && id && login) {
                dispatch(authAC(email, id, login));
            }
        })
}

export const getUserStatusThunk = (userId: string | number): AppThunk => dispatch => {
    dispatch(setLoadingAC(true));

    getUserStatusAPI(userId)
        .then(response => {
            dispatch(setLoadingAC(false));
            dispatch(getStatusAC(response));
        })
}

export const setUserStatusThunk = (status: string): AppThunk => dispatch => {
    dispatch(setLoadingAC(true));

    setUserStatusAPI(status)
        .then(response => {
            dispatch(setLoadingAC(false));
            if (response.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
}
