import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {RootState} from '../../redux/reduxStore';
import {
    setCurrentPageAC,
    setFollowingUserAC,
    setLoadingAC,
    setTotalUsersCountAC,
    UsersStateType
} from '../../reducers/usersReducer';
import {followUserThunk, getUsersThunk, unFollowUserThunk} from '../../thunks/thunks';

type UsersContainerPropsType = {
    usersState: UsersStateType
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (count: number) => void
    setLoading: (value: boolean) => void
    setFollowingUser: (value: boolean, id: number) => void
    getUsersThunk: (pageSize: number, index: number) => void
    followUserThunk: (id: number) => void
    unFollowUserThunk: (id: number) => void
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
        this.props.getUsersThunk(5, 1);
    }

    setCurrentPageHandler = (index: number) => {
        this.props.setCurrentPage(index + 1);
        this.props.getUsersThunk(this.props.usersState.pageSize, index + 1);
    }

    render() {
        return <Users
            users={this.props.usersState.items}
            totalUsersCount={this.props.usersState.totalUsersCount}
            currentPage={this.props.usersState.currentPage}
            pageSize={this.props.usersState.pageSize}
            setCurrentPageHandler={this.setCurrentPageHandler}
            loading={this.props.usersState.isLoading}
            setFollowingUser={this.props.setFollowingUser}
            followingInProgress={this.props.usersState.followingInProgress}
            followUserThunk={this.props.followUserThunk}
            unFollowUserThunk={this.props.unFollowUserThunk}
        />
    }
}

type MapStateToPropsType = {
    usersState: UsersStateType
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        usersState: state.usersReducer
    }
}

const mapDispatchToPropsObj = {
    setCurrentPage: setCurrentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    setLoading: setLoadingAC,
    setFollowingUser: setFollowingUserAC,
    getUsersThunk,
    followUserThunk,
    unFollowUserThunk
}

export default connect(mapStateToProps, mapDispatchToPropsObj)(UsersContainer);
