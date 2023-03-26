import {PostType} from '../redux/state';
import {GetUserProfileType} from '../api/api';

const initialState = {
    isLoading: false,
    textArea: '',
    posts: [
        {id: 1, text: 'post1'},
        {id: 2, text: 'post2'},
        {id: 3, text: 'post3'},
        {id: 4, text: 'post4'},
        {id: 5, text: 'post5'},
        {id: 6, text: 'post6'},
    ],
    aboutMe: "",
    contacts: {
        facebook: "",
        website: "",
        vk: "",
        twitter: "",
        instagram: "",
        youtube: "",
        github: "",
        mainLink: ""
    },
    lookingForAJob: false,
    lookingForAJobDescription: "",
    fullName: "",
    userId: 0,
    photos: {
        small: "",
        large: ""
    },
    status: ''
};

export interface Contacts {
    facebook: string
    website?: null | string
    vk: string
    twitter: string
    instagram: string
    youtube?: null | string
    github: string
    mainLink?: null | string
}

export interface Photos {
    small: string
    large: string
}

export interface ProfileResponseType {
    aboutMe: string
    contacts: Contacts
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number | string
    photos: Photos
}

export type ProfileStateType = ProfileResponseType & {
    textArea: string
    posts: PostType[]
    isLoading: boolean
    status: string
}

type ActionsType = UpdateTextAreaActionCreateType | UpdateUserProfileType | AddPostActionCreatorType | SetLoadingType | GetStatusType | SetStatusType;

export const profileReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                text: state.textArea
            };
            return {...state, posts: [...state.posts, newPost], textArea: ''};
        case 'UPDATE-TEXT':
            return {...state, textArea: action.payload.text};
        case 'UPDATE_USER_PROFILE':
            return {...state, ...action.payload.userResponse};
        case 'SET_LOADING':
            return {...state, isLoading: action.payload.value};
        case 'GET_STATUS':
            return {...state, status: action.payload.status};
        case 'SET_STATUS':
            return {...state, status: action.payload.status};
        default:
            return state;
    }
}

export type UpdateUserProfileType = ReturnType<typeof updateUserProfileAC>;
export type UpdateTextAreaActionCreateType = ReturnType<typeof updateTextAreaAC>;
export type AddPostActionCreatorType = ReturnType<typeof addPostAC>;
export type SetLoadingType = ReturnType<typeof setLoadingAC>;
export type GetStatusType = ReturnType<typeof getStatusAC>;
export type SetStatusType = ReturnType<typeof setStatusAC>;

export const addPostAC = () => ({
    type: 'ADD-POST'
} as const)

export const updateTextAreaAC = (payload: string) => ({
    type: 'UPDATE-TEXT', payload: { text: payload }
} as const)

export const updateUserProfileAC = (userResponse: GetUserProfileType) => ({
    type: 'UPDATE_USER_PROFILE', payload: { userResponse }
} as const)

export const setLoadingAC = (value: boolean) => ({
    type: 'SET_LOADING', payload: { value }
} as const)

export const getStatusAC = (status: string) => ({
    type: 'GET_STATUS', payload: { status }
} as const)

export const setStatusAC = (status: string) => ({
    type: 'SET_STATUS', payload: { status }
} as const)
