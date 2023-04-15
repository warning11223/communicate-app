import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import {RootState} from '../../redux/reduxStore';
import {
    setCurrentPageAC,
    setFollowingUserAC,
    setLoadingAC,
    setTotalUsersCountAC,
    UserType
} from '../../reducers/usersReducer';
import {followUserThunk, getUsersThunk, unFollowUserThunk} from '../../thunks/thunks';
import {
    geCurrentPage,
    getFollowingInProgress,
    getIsLoading,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from './users-selectors';

type UsersContainerPropsType = MapStateToPropsType & {
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
        this.props.getUsersThunk(this.props.pageSize, index + 1);
    }

    render() {
        return <Users
            users={this.props.users}
            totalUsersCount={this.props.totalUsersCount}
            currentPage={this.props.currentPage}
            pageSize={this.props.pageSize}
            setCurrentPageHandler={this.setCurrentPageHandler}
            loading={this.props.isLoading}
            setFollowingUser={this.props.setFollowingUser}
            followingInProgress={this.props.followingInProgress}
            followUserThunk={this.props.followUserThunk}
            unFollowUserThunk={this.props.unFollowUserThunk}
        />
    }
}

type MapStateToPropsType = {
    users: UserType[]
    totalUsersCount: number
    currentPage: number
    pageSize: number
    isLoading: boolean
    followingInProgress: number[]
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        users: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: geCurrentPage(state),
        pageSize: getPageSize(state),
        isLoading: getIsLoading(state),
        followingInProgress: getFollowingInProgress(state),

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
