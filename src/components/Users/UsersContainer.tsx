import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {
    followUserAC,
    setCurrentPageAC, setFollowingUserAC,
    setLoadingAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowUserAC,
    UsersStateType,
    UserType
} from '../../reducers/usersReducer';
import {getUsersAPI} from '../../api/api';

type UsersContainerPropsType = {
    usersState: UsersStateType
    setUsers: (users: UserType[]) => void
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    setLoading: (value: boolean) => void
    setFollowingUser: (value: boolean, id: number) => void
}

export interface Photos {
    small?: null | string
    large?: null | string
}

export interface Item {
    name: string
    id: number
    uniqueUrlName?: null | string
    photos: Photos
    status?: null | string
    followed: boolean
}

export interface UsersResponseType {
    items: any
    totalCount: number
    error?: null | string
}

class UsersContainer extends React.Component<UsersContainerPropsType> {
    componentDidMount() {
        this.props.setLoading(true);

        getUsersAPI(5, 1)
            .then(response => {
                this.props.setUsers(response.items);
                this.props.setLoading(false);
                //this.props.setTotalUsersCount(response.data.totalCount)
            });
    }

    setCurrentPageHandler = (index: number) => {
        this.props.setLoading(true);
        this.props.setCurrentPage(index + 1);

        getUsersAPI(this.props.usersState.pageSize, index + 1)
            .then(response => {
                this.props.setUsers(response.items);
                this.props.setLoading(false);
            });
    }

    render() {
        return <Users
            users={this.props.usersState.items}
            totalUsersCount={this.props.usersState.totalUsersCount}
            currentPage={this.props.usersState.currentPage}
            pageSize={this.props.usersState.pageSize}
            followUser={this.props.followUser}
            unFollowUser={this.props.unFollowUser}
            setCurrentPageHandler={this.setCurrentPageHandler}
            loading={this.props.usersState.isLoading}
            setFollowingUser={this.props.setFollowingUser}
            followingInProgress={this.props.usersState.followingInProgress}
        />
    }
}

type MapStateToPropsType = {
    usersState: UsersStateType
}
type MapDispatchToPropsType = {
    setUsers: (users: UserType[]) => void
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    setLoading: (value: boolean) => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        usersState: state.usersReducer
    }
}
const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        setUsers: (users: UserType[]) => dispatch(setUsersAC(users)),
        followUser: (id: number) => dispatch(followUserAC(id)),
        unFollowUser: (id: number) => dispatch(unfollowUserAC(id)),
        setCurrentPage: (currentPage: number) => dispatch(setCurrentPageAC(currentPage)),
        setTotalUsersCount: (count: number) => dispatch(setTotalUsersCountAC(count)),
        setLoading: (value: boolean) => dispatch(setLoadingAC(value))
    }
}

const mapDispatchToPropsObj = {
    setUsers: setUsersAC,
    followUser: followUserAC,
    unFollowUser: unfollowUserAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setLoading: setLoadingAC,
    setFollowingUser: setFollowingUserAC,
}

export default connect(mapStateToProps, mapDispatchToPropsObj)(UsersContainer);
