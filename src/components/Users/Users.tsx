import React from 'react';
import {UserType} from '../../reducers/usersReducer';
import user_avatar from '../../img/user-avatar.png'

import s from './Users.module.css'
import Preloader from '../Preloader/Preloader';
import {Link} from 'react-router-dom';
import {followUserAPI, unFollowUserAPI} from '../../api/api';

type UsersPropsType = {
    users: UserType[]
    setCurrentPageHandler: (index: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    loading: boolean
    setFollowingUser: (value: boolean, id: number) => void
    followingInProgress: number[]
    followUserThunk: (id: number) => void
    unFollowUserThunk: (id: number) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount,
                                             users,
                                             currentPage,
                                             pageSize,
                                             setCurrentPageHandler,
                                             loading,
                                             followingInProgress,
                                             followUserThunk,
                                             unFollowUserThunk
                                         }) => {
    let usersNumbers: number[] = [];
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    for (let i = 1; i <= pagesCount; i++) {
        usersNumbers.push(i);
    }
    const pagination = usersNumbers.map((item, index) => {
        return <span
            key={index}
            className={currentPage === index + 1 ? s.activePage : s.page}
            onClick={() => setCurrentPageHandler(index)}
        >{item}</span>
    })

    return (
        <div className={s.usersContainer}>
            <ul className={s.paginationContainer}>
                {pagination}
            </ul>
            {loading
                ? <Preloader/>
                : users.map(item => {
                    const followUserHandler = (id: number) => {
                        followUserThunk(id)
                    }

                    const unFollowUserHandler = (id: number) => {
                        unFollowUserThunk(id);
                    }

                    return (
                        <div key={item.id} className={s.userContainer}>
                            <div className={s.userLeft}>
                                <Link to={`/profile/${item.id}`}>
                                    <img
                                        className={s.avatar}
                                        src={item.photos.small ? item.photos.small : user_avatar}
                                        alt="avatar"
                                        width={80}
                                        height={80}
                                    />
                                </Link>
                                {item.followed
                                    ? <button
                                        className={s.userBtn}
                                        onClick={() => unFollowUserHandler(item.id)}
                                        disabled={followingInProgress.some(id => id === item.id)}
                                    >Unfollow</button>
                                    : <button
                                        className={s.userBtn}
                                        onClick={() => followUserHandler(item.id)}
                                        disabled={followingInProgress.some(id => id === item.id)}
                                    >Follow</button>
                                }
                            </div>
                            <div className={s.userRight}>
                                <div className={s.userInfo}>
                                    <span>{item.name}</span>
                                    <span>{item.status}</span>
                                </div>
                                <div className={s.userDesc}>
                                    <span>{item.uniqueUrlName}</span>
                                    <span>{item.id}</span>
                                </div>
                            </div>
                        </div>
                    )
                })}
        </div>
    );
}

export default Users;
