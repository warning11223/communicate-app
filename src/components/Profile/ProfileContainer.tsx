import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {ProfileStateType, setLoadingAC, updateUserProfileAC} from '../../reducers/profileReducer';
import {RootState} from '../../redux/reduxStore';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {GetUserProfileType} from '../../api/api';
import {getUserProfileThunk, getUserStatusThunk, setUserStatusThunk} from '../../thunks/thunks';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type MapDispatchToPropsType = {
    updateUserProfile: (userResponse: GetUserProfileType) => void
    setLoading: (value: boolean) => void
    getUserProfileThunk: (id: string) => void
    getUserStatusThunk: (userId: string | number) => void
    setUserStatusThunk: (status: string) => void
}
type MapStateToPropsType = {
    profile: ProfileStateType
}
type PathParamsType = {
    userID: string
}
type ProfileContainerProps = RouteComponentProps<PathParamsType> & MapDispatchToPropsType & MapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        let id = this.props.match.params.userID;
        this.props.getUserProfileThunk(id);
        this.props.getUserStatusThunk(id);
    }

    render() {
        return <Profile state={this.props.profile} setUserStatusThunk={this.props.setUserStatusThunk}/>
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profile: state.profileReducer,
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    updateUserProfile: updateUserProfileAC,
    setLoading: setLoadingAC,
    getUserProfileThunk,
    getUserStatusThunk,
    setUserStatusThunk
}

//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer)));
export default compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)
