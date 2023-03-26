import {AppDispatch} from '../redux/reduxStore';
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

export const getUserProfileThunk = (id: string) => (dispatch: AppDispatch) => {
    dispatch(setLoadingAC(true));
    getUserProfileAPI(id)
        .then(response => {
            dispatch(setLoadingAC(false));
            dispatch(updateUserProfileAC(response.data));
        })
}

export const getUsersThunk = (pageSize: number, index: number) => (dispatch: AppDispatch) => {
    dispatch(setLoadingAC(true));

    getUsersAPI(pageSize, index + 1)
        .then(response => {
            dispatch(setUsersAC(response.items));
            dispatch(setLoadingAC(false));
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

export const getUserStatusThunk = (userId: string | number) => (dispatch: AppDispatch) => {
    dispatch(setLoadingAC(true));

    getUserStatusAPI(userId)
        .then(response => {
            dispatch(setLoadingAC(false));
            dispatch(getStatusAC(response));
        })
}

export const setUserStatusThunk = (status: string) => (dispatch: AppDispatch) => {
    dispatch(setLoadingAC(true));

    setUserStatusAPI(status)
        .then(response => {
            dispatch(setLoadingAC(false));
            if (response.resultCode === 0) {
                dispatch(setStatusAC(status));
            }
        })
}
