import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {
    getUserProfileThunk,
    ProfileStateType,
    setLoadingAC,
    setPhotoThunk,
    updateUserProfileAC
} from '../../redux/reducers/profile/profileReducer';
import {RootState} from '../../redux/reduxStore';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {GetUserProfileType} from '../../api/api';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getProfile, getProfileError, getUserId} from './profile-selectors';
import {getUserStatusThunk, setUserStatusThunk } from '../../redux/reducers/users/usersReducer';
import {getUsersError} from '../Users/users-selectors';


type MapDispatchToPropsType = {
    updateUserProfile: (userResponse: GetUserProfileType) => void
    setLoading: (value: boolean) => void
    getUserProfileThunk: (id: string) => void
    getUserStatusThunk: (userId: string | number) => void
    setUserStatusThunk: (status: string) => void
    setPhotoThunk: (photo: File) => void
}
type MapStateToPropsType = {
    profile: ProfileStateType
    userInfoId: number | null
    error: string
    usersError: string
}
type PathParamsType = {
    userID: string
}
type ProfileContainerProps = RouteComponentProps<PathParamsType> & MapDispatchToPropsType & MapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        let userId: number | null = +this.props.match.params.userID!;
        if (!userId) {
            userId = this.props.userInfoId;
        }

        this.props.getUserProfileThunk(String(userId));
        this.props.getUserStatusThunk(String(userId));
    }
    render() {
        return <Profile
            state={this.props.profile}
            setUserStatusThunk={this.props.setUserStatusThunk}
            setPhotoThunk={this.props.setPhotoThunk}
            isOwner={!this.props.match.params.userID}
            error={this.props.error}
            usersError={this.props.usersError}
        />
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profile: getProfile(state),
        userInfoId: getUserId(state),
        error: getProfileError(state),
        usersError: getUsersError(state)
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    updateUserProfile: updateUserProfileAC,
    setLoading: setLoadingAC,
    getUserProfileThunk,
    getUserStatusThunk,
    setUserStatusThunk,
    setPhotoThunk
}

//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer)));
export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)
