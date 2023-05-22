import {AppThunk} from '../../reduxStore';
import {getStatusAC, setStatusAC} from '../profile/profileReducer';
import {networkAPI} from '../../../api/api';

export type UsersReducerActionsType =
    FollowUserACType
    | UnfollowUserACType
    | SetUsersACType
    | SetCurrentPageType
    | SetTotalUsersCountType
    | SetLoadingACType
    | SetFollowingUserType
    | SetUsersErrorType

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string
    followed: boolean
}

export type UsersStateType = {
    items: UserType[]
    error: string
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
    followingInProgress: number[]
}

const initialState: UsersStateType = {
    items: [],
    error: '',
    pageSize: 5,
    totalUsersCount: 120,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: UsersReducerActionsType): UsersStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? {...item, followed: true} : item)
            };
        case 'UNFOLLOW':
            return {
                ...state,
                items: state.items.map(item => item.id === action.payload.id ? {...item, followed: false} : item)
            };
        case 'SET_USERS':
            return {...state, items: action.payload.users};
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.payload.currentPage};
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.payload.count};
        case 'SET_LOADING':
            return {...state, isLoading: action.payload.value};
        case 'SET_FOLLOWING':
            return {
                ...state,
                followingInProgress: action.payload.value ? [...state.followingInProgress, action.payload.id] : state.followingInProgress.filter(item => item !== action.payload.id)
            };
        case 'SET_USERS_ERROR':
            return {...state, error: action.payload.error};
        default:
            return state;
    }
}

export type FollowUserACType = ReturnType<typeof followUserAC>;
export type UnfollowUserACType = ReturnType<typeof unfollowUserAC>;
export type SetUsersACType = ReturnType<typeof setUsersAC>;
export type SetCurrentPageType = ReturnType<typeof setCurrentPageAC>;
export type SetTotalUsersCountType = ReturnType<typeof setTotalUsersCountAC>;
export type SetLoadingACType = ReturnType<typeof setLoadingAC>;
export type SetFollowingUserType = ReturnType<typeof setFollowingUserAC>;
export type SetUsersErrorType = ReturnType<typeof setUsersError>;

export const followUserAC = (id: number) => ({
    type: 'FOLLOW', payload: {id}
} as const);

export const unfollowUserAC = (id: number) => ({
    type: 'UNFOLLOW', payload: {id}
} as const);

export const setUsersAC = (users: UserType[]) => ({
    type: 'SET_USERS', payload: {users}
} as const);

export const setCurrentPageAC = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE', payload: {currentPage}
} as const)

export const setTotalUsersCountAC = (count: number) => ({
    type: 'SET_TOTAL_USERS_COUNT', payload: {count}
} as const)

export const setLoadingAC = (value: boolean) => ({
    type: 'SET_LOADING', payload: {value}
} as const)

export const setFollowingUserAC = (value: boolean, id: number) => ({
    type: 'SET_FOLLOWING', payload: {value, id}
} as const)

export const setUsersError = (error: string) => ({
    type: 'SET_USERS_ERROR', payload: {error}
} as const)

export const getUsersThunk = (pageSize: number, index: number): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoadingAC(true));

        const res = await networkAPI.getUsersAPI(pageSize, index + 1)
        dispatch(setUsersAC(res.items));
        dispatch(setTotalUsersCountAC(res.totalCount))
        dispatch(setLoadingAC(false));
    } catch ({message}) {
        if (typeof message === 'string') {
            dispatch(setUsersError(message))
            dispatch(setLoadingAC(false));

            setTimeout(() => {
                dispatch(setUsersError(''))
            }, 1000)
        }
    }
}

export const followUserThunk = (id: number): AppThunk => async (dispatch) => {
    try {
        dispatch(setFollowingUserAC(true, id));

        const res = await networkAPI.followUserAPI(id)
        if (res.resultCode === 0) {
            dispatch(followUserAC(id));
        }
        dispatch(setFollowingUserAC(false, id));
    } catch ({message}) {
        if (typeof message === 'string') {
            dispatch(setUsersError(message))
            dispatch(setFollowingUserAC(false, id));

            setTimeout(() => {
                dispatch(setUsersError(''))
            }, 1000)
        }
    }
}

export const unFollowUserThunk = (id: number): AppThunk => async (dispatch) => {
    try {
        dispatch(setFollowingUserAC(true, id));

        const res = await networkAPI.unFollowUserAPI(id)
        if (res.resultCode === 0) {
            dispatch(unfollowUserAC(id));
        }
        dispatch(setFollowingUserAC(false, id));
    } catch ({message}) {
        if (typeof message === 'string') {
            dispatch(setUsersError(message))

            setTimeout(() => {
                dispatch(setUsersError(''))
            }, 1000)
        }
    }
}

export const getUserStatusThunk = (userId: string | number): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoadingAC(true));

        const res = await networkAPI.getUserStatusAPI(userId)
        dispatch(setLoadingAC(false));
        dispatch(getStatusAC(res));
    } catch ({message}) {
        if (typeof message === 'string') {
            dispatch(setUsersError(message))
            dispatch(setLoadingAC(false));

            setTimeout(() => {
                dispatch(setUsersError(''))
            }, 1000)
        }
    }
}

export const setUserStatusThunk = (status: string): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoadingAC(true));

        const res = await networkAPI.setUserStatusAPI(status)
        dispatch(setLoadingAC(false));
        if (res.resultCode === 0) {
            dispatch(setStatusAC(status));
        }
    } catch ({message}) {
        if (typeof message === 'string') {
            dispatch(setUsersError(message))
            dispatch(setLoadingAC(false));

            setTimeout(() => {
                dispatch(setUsersError(''))
            }, 1000)
        }
    }
}
