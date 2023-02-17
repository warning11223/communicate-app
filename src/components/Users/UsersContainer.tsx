import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {followUserAC, setUsersAC, unfollowUserAC, UserType} from '../../reducers/usersReducer';

type UsersContainerPropsType = {
    users: UserType[]
    setUsers: (users: UserType[]) => void
    followUser: (id: string) => void
    unFollowUser: (id: string) => void
}

const UsersContainer: React.FC<UsersContainerPropsType> = ({ users, setUsers, unFollowUser, followUser }) => {
    return <Users
        users={users}
        setUsers={setUsers}
        followUser={followUser}
        unFollowUser={unFollowUser}
    />
};

const mapStateToProps = (state: RootState) => {
    return {
        users: state.usersReducer.users
    }
}
const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        followUser: (id: string) => dispatch(followUserAC(id)),
        unFollowUser: (id: string) => dispatch(unfollowUserAC(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
