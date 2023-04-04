import axios from 'axios';
import {UsersResponseType} from '../components/Users/UsersContainer';
import {GetAuthType} from '../components/Header/HeaderContainer';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '562837c4-f081-441e-8b82-efb66f432caa'
    }
});

export type GetUserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube:  string
        github: string
        mainLink: string

    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: {
        small: string
        large: string
    }
    userId: number
}

export type ResponseType<D> = {
    resultCode: number
    messages: string[]
    data: D
}

export const getUsersAPI = (count = 5, page = 1) => {
    return instance.get<UsersResponseType>(`users?count=${count}&page=${page}`)
        .then(response => response.data)
}

export const followUserAPI = (id: number) => {
    return instance.post(`follow/${id}`)
        .then(response => response.data)
}

export const unFollowUserAPI = (id: number) => {
    return instance.delete(`follow/${id}`)
        .then(response => response.data)
}

export const getAuthMeAPI = () => {
    return instance.get<GetAuthType>('auth/me')
        .then(response => response.data.data)
}

export const getUserProfileAPI = (id: string = '23955') => {
    return instance.get<GetUserProfileType>(`profile/${id}`)
        .then(response => response)
}

export const getUserStatusAPI = (userId: string | number = '23955') => {
    return instance.get(`profile/status/${userId}`)
        .then(response => response.data)
}

export const setUserStatusAPI = (status: string) => {
    return instance.put<ResponseType<{}>>(`profile/status`, {
        status
    })
        .then(response => response.data)
}

export const loginAPI = (email: string, password: string, rememberMe: boolean) => {
    return instance.post<ResponseType<{ userId: number }>>('auth/login', {
        email,
        password,
        rememberMe
    })
        .then(response => response.data)
}

export const logoutAPI = () => {
    return instance.delete<ResponseType<{}>>('auth/login')
        .then(res => res.data)
}
