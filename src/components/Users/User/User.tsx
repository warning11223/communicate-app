import React from 'react';
import s from './User.module.css';
import {Link} from 'react-router-dom';
import user_avatar from '../../../assets/img/user-avatar.png';
import {UserType} from '../../../redux/reducers/users/usersReducer';


export const User: React.FC<UserPropsType> = ({followUserHandler, unFollowUserHandler, item, followingInProgress}) => {
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
    );
};

type UserPropsType = {
    item: UserType
    followUserHandler: (id: number) => void
    unFollowUserHandler: (id: number) => void
    followingInProgress: number[]
}
