
type ActionsType = FollowUserACType | UnfollowUserACType | SetUsersACType

export type UserType = {
    id: string
    avatar: string
    followed: boolean
    name: string
    status: string
    country: string
    city: string
}

type InitialStateType = {
    users: UserType[]
}

const initialState: InitialStateType = {
    users: [
        /*{id: '1', avatar: '', followed: false, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
        {id: '2', avatar: '', followed: false, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
        {id: '3', avatar: '', followed: true, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
        {id: '4', avatar: '', followed: true, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},*/
    ]
}

export const usersReducer = (state = initialState, action: ActionsType) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(item => item.id === action.payload.id ? {...item, followed: true} : item)};
        case 'UNFOLLOW':
            return {...state, users: state.users.map(item => item.id === action.payload.id ? {...item, followed: false} : item)};
        case 'SET_USERS':
            return {...state, users: action.payload.users};
        default:
            return state;
    }
}

export type FollowUserACType = ReturnType<typeof followUserAC>;
export type UnfollowUserACType = ReturnType<typeof unfollowUserAC>;
export type SetUsersACType = ReturnType<typeof setUsersAC>;

export const followUserAC = (id: string) => ({
    type: 'FOLLOW', payload: { id }
} as const);

export const unfollowUserAC = (id: string) => ({
    type: 'UNFOLLOW', payload: { id }
} as const);

export const setUsersAC = (users: UserType[]) => ({
    type: 'SET_USERS', payload: { users }
} as const);
