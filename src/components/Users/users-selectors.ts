import {RootState} from '../../redux/reduxStore';

export const getUsers = (state: RootState) => {
    return state.usersReducer.items
}
export const getTotalUsersCount = (state: RootState) => {
    return state.usersReducer.totalUsersCount
}
export const geCurrentPage = (state: RootState) => {
    return state.usersReducer.currentPage
}
export const getPageSize = (state: RootState) => {
    return state.usersReducer.pageSize
}
export const getIsLoading = (state: RootState) => {
    return state.usersReducer.isLoading
}
export const getFollowingInProgress = (state: RootState) => {
    return state.usersReducer.followingInProgress
}
