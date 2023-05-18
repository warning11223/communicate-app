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

export const networkAPI = {
    getUsersAPI: (count = 5, page = 1) => {
        return instance.get<UsersResponseType>(`users?count=${count}&page=${page}`)
            .then(res => res.data)
    },
    followUserAPI: (id: number) => {
        return instance.post(`follow/${id}`)
            .then(res => res.data)
    },
    unFollowUserAPI: (id: number) => {
        return instance.delete(`follow/${id}`)
            .then(res => res.data)
    },
    getAuthMeAPI: () => {
        return instance.get<GetAuthType>('auth/me')
            .then(res => res.data.data)
    },
    getUserProfileAPI: (id: string = '23955') => {
        return instance.get<GetUserProfileType>(`profile/${id}`)
            .then(res => res)
    },
    getUserStatusAPI: (userId: string | number = '23955') => {
        return instance.get(`profile/status/${userId}`)
            .then(res => res.data)
    },
    setUserStatusAPI: (status: string) => {
        return instance.put<ResponseType<{}>>(`profile/status`, {
            status
        })
            .then(res => res.data)
    },
    setPhotoAPI: (image: File) => {
        const formData = new FormData()
        formData.append('image', image)

        return instance.put<ResponseType<{ photos: { small: string, large: string } }>>(`/profile/photo`, formData)
            .then(res => res.data.data.photos)
    },
    loginAPI: (email: string, password: string, rememberMe: boolean, captcha: string) => {
        return instance.post<ResponseType<{ userId: number }>>('auth/login', {
            email,
            password,
            rememberMe,
            captcha
        })
            .then(res => res.data)
    },
    logoutAPI: () => {
        return instance.delete<ResponseType<{}>>('auth/login')
            .then(res => res.data)
    },
    setProfile: (properties: ProfileProps) => {
        return instance.put<ResponseType<{}>>('/profile', properties)
            .then(res => res.data)
    },
    getCaptcha: () => {
        return instance.get<{ url: string }>('/security/get-captcha-url')
    }
}

export type GetUserProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: string
        vk: string
        twitter: string
        instagram: string
        youtube: string
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

export type ProfileProps = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}
