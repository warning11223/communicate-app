type ActionsType = FollowUserACType | UnfollowUserACType | SetUsersACType | SetCurrentPageType | SetTotalUsersCountType | SetLoadingACType | SetFollowingUserType;

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
    error: string | null
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
    totalUsersCount: 20,
    currentPage: 1,
    isLoading: false,
    followingInProgress: [],
}

export const usersReducer = (state = initialState, action: ActionsType): UsersStateType => {
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
            return {...state, followingInProgress: action.payload.value ? [...state.followingInProgress, action.payload.id] : state.followingInProgress.filter(item => item !== action.payload.id)};
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
    type: 'SET_LOADING', payload: { value }
} as const)

export const setFollowingUserAC = (value: boolean, id: number) => ({
    type: 'SET_FOLLOWING', payload: { value, id }
} as const)
