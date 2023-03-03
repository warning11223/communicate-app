import React from 'react';
import {UserType} from '../../reducers/usersReducer';
import user_avatar from '../../img/user-avatar.png'

import s from './Users.module.css'
import Preloader from '../Preloader/Preloader';
import { Link } from 'react-router-dom';

type UsersPropsType = {
    users: UserType[]
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setCurrentPageHandler: (index: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number
    loading: boolean
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount,
                                             users,
                                             currentPage,
                                             pageSize,
                                             unFollowUser,
                                             followUser,
                                             setCurrentPageHandler,
                                             loading
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
                                    ? <button className={s.userBtn}
                                              onClick={() => unFollowUser(item.id)}>Unfollow</button>
                                    : <button className={s.userBtn}
                                              onClick={() => followUser(item.id)}>Follow</button>
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
