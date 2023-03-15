import {PostType, ProfilePageType} from '../redux/state';
import {getUserProfile, GetUserProfileType} from '../api/api';
import {AppDispatch} from '../redux/reduxStore';

const initialState = {
    isLoading: false,
    textArea: 'Add post',
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
    }
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
    userId: number
    photos: Photos
}

export type ProfileStateType = ProfileResponseType & {
    textArea: string
    posts: PostType[]
    isLoading: boolean
}

type ActionsType = UpdateTextAreaActionCreateType | UpdateUserProfileType | AddPostActionCreatorType | SetLoadingType;

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
            return {...state, isLoading: action.payload.value}
        default:
            return state;
    }
}

export type UpdateUserProfileType = ReturnType<typeof updateUserProfile>;
export type UpdateTextAreaActionCreateType = ReturnType<typeof updateTextAreaActionCreate>;
export type AddPostActionCreatorType = ReturnType<typeof addPostActionCreator>;
export type SetLoadingType = ReturnType<typeof setLoading>;

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const updateTextAreaActionCreate = (payload: string) => ({
    type: 'UPDATE-TEXT', payload: { text: payload }
} as const)

export const updateUserProfile = (userResponse: GetUserProfileType) => ({
    type: 'UPDATE_USER_PROFILE', payload: { userResponse }
} as const)

export const setLoading = (value: boolean) => ({
    type: 'SET_LOADING', payload: { value }
} as const)



