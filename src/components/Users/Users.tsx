import React from 'react';
import {UserType} from '../../redux/reducers/users/usersReducer';
import s from './Users.module.css'
import Preloader from '../common/Preloader/Preloader';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User/User';
import {toast} from 'react-toastify';

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
    error: string
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
                                             unFollowUserThunk,
                                             error
                                         }) => {

    if (error) {
        toast.error(error)
    }

    return (
        <div className={s.usersContainer}>
            <Paginator
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                currentPage={currentPage}
                setCurrentPageHandler={setCurrentPageHandler}
            />
            {loading
                ? <div style={{position: 'fixed', top: '10%', textAlign: 'center', width: '64.6%'}}>
                    <Preloader/>
                </div>
                : users.map(item => {
                    const followUserHandler = (id: number) => {
                        followUserThunk(id)
                    }
                    const unFollowUserHandler = (id: number) => {
                        unFollowUserThunk(id);
                    }
                    return (
                        <User
                            key={item.id}
                            item={item}
                            followUserHandler={followUserHandler}
                            unFollowUserHandler={unFollowUserHandler}
                            followingInProgress={followingInProgress}
                        />
                    )
                })}
        </div>
    );
}

export default Users;
