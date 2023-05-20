import {PostType} from '../../state';
import {GetUserProfileType, networkAPI, ProfileProps} from '../../../api/api';
import {AppThunk} from '../../reduxStore';

const initialState = {
    isLoading: false,
    textArea: '',
    posts: [
        {id: 1, text: 'post1'},
        {id: 2, text: 'post2'},
        {id: 3, text: 'post3'},
    ],
    aboutMe: '',
    contacts: {
        facebook: '',
        website: '',
        vk: '',
        twitter: '',
        instagram: '',
        youtube: '',
        github: '',
        mainLink: ''
    },
    lookingForAJob: false,
    lookingForAJobDescription: '',
    fullName: '',
    userId: 0,
    photos: {
        small: '',
        large: ''
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

export type ProfileReducerActionsType =
    UpdateTextAreaActionCreateType
    | UpdateUserProfileType
    | AddPostActionCreatorType
    | SetLoadingType
    | GetStatusType
    | SetStatusType
    | SetPhotoType

export const profileReducer = (state: ProfileStateType = initialState, action: ProfileReducerActionsType): ProfileStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                text: action.post,
            };
            return {...state, posts: [newPost, ...state.posts]};
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
        case 'SET_PHOTO':
            return {...state, photos: action.payload.data}
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
export type SetPhotoType = ReturnType<typeof setPhoto>;

export const addPostAC = (post: string) => ({
    type: 'ADD-POST', post
} as const)

export const updateTextAreaAC = (payload: string) => ({
    type: 'UPDATE-TEXT', payload: {text: payload}
} as const)

export const updateUserProfileAC = (userResponse: GetUserProfileType) => ({
    type: 'UPDATE_USER_PROFILE', payload: {userResponse}
} as const)

export const setLoadingAC = (value: boolean) => ({
    type: 'SET_LOADING', payload: {value}
} as const)

export const getStatusAC = (status: string) => ({
    type: 'GET_STATUS', payload: {status}
} as const)

export const setStatusAC = (status: string) => ({
    type: 'SET_STATUS', payload: {status}
} as const)

export const setPhoto = (data: { small: string, large: string }) => ({
    type: 'SET_PHOTO', payload: {data}
} as const)

export const getUserProfileThunk = (id: string): AppThunk => async (dispatch) => {
    dispatch(setLoadingAC(true))

    const res = await networkAPI.getUserProfileAPI(id)
    dispatch(setLoadingAC(false))
    dispatch(updateUserProfileAC(res.data))
}

export const setPhotoThunk = (photo: File): AppThunk => async (dispatch) => {
    dispatch(setLoadingAC(true))

    const res = await networkAPI.setPhotoAPI(photo)
    dispatch(setLoadingAC(false))
    dispatch(setPhoto(res))
}


export const setProfileThunk = (properties: ProfileProps, id: string): AppThunk => async (dispatch) => {
    dispatch(setLoadingAC(true))

    const res1 = await networkAPI.setProfile(properties)
    const res2 = await networkAPI.getUserProfileAPI(id)

    dispatch(updateUserProfileAC(res2.data))

    dispatch(setLoadingAC(false))
}
