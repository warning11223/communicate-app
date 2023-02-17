import React, {useEffect} from 'react';
import {UserType} from '../../reducers/usersReducer';
import user_avatar from '../../img/user-avatar.png'

import s from './Users.module.css'

type UsersPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    followUser: (id: string) => void
    unFollowUser: (id: string) => void
}

const Users: React.FC<UsersPropsType> = ({ users, setUsers, unFollowUser, followUser }) => {

    useEffect(() => {
        setUsers([
            {id: '1', avatar: user_avatar, followed: false, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
            {id: '2', avatar: user_avatar, followed: false, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
            {id: '3', avatar: user_avatar, followed: true, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
            {id: '4', avatar: user_avatar, followed: true, name: 'Denis', status: 'I like coding', country: 'Ukraine', city: 'Zp'},
        ]);
    }, []);


    const renderUsers = users.map(item => {
        return (
            <div key={item.id} className={s.userContainer}>
                <div className={s.userLeft}>
                    <img src={item.avatar} alt="avatar" width={80} height={80}/>
                    {item.followed
                        ? <button className={s.userBtn} onClick={() => unFollowUser(item.id)}>Unfollow</button>
                        : <button className={s.userBtn} onClick={() => followUser(item.id)}>Follow</button>
                    }
                </div>
                <div className={s.userRight}>
                    <div className={s.userInfo}>
                        <span>{item.name}</span>
                        <span>{item.status}</span>
                    </div>
                    <div className={s.userDesc}>
                        <span>{item.country}</span>
                        <span>{item.city}</span>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.usersContainer}>
            {renderUsers}
        </div>
    );
};

export default Users;
