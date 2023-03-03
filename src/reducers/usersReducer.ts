type ActionsType = FollowUserACType | UnfollowUserACType | SetUsersACType | SetCurrentPageType | SetTotalUsersCountType | SetLoadingACType

export type UserType = {
    name: string
    id: number
    uniqueUrlName: string | null
    photos: {
        small: string | null
        large: string | null
    },
    status: string | null
    followed: boolean
}

export type UsersStateType = {
    items: UserType[]
    error: string | null
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isLoading: boolean
}

const initialState: UsersStateType = {
    items: [],
    error: '',
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    isLoading: false
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
