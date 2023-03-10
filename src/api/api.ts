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
