import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import {ProfileStateType, setLoading, updateUserProfile} from '../../reducers/profileReducer';
import {RootState} from '../../redux/reduxStore';
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {GetUserProfileType} from '../../api/api';
import {getUserProfileThunk} from '../../thunks/thunks';

type MapDispatchToPropsType = {
    updateUserProfile: (userResponse: GetUserProfileType) => void
    setLoading: (value: boolean) => void
    getUserProfileThunk: (id: string) => void
}
type MapStateToPropsType = {
    profile: ProfileStateType
    isAuth: boolean | null
}
type PathParamsType = {
    userID: string
}
type ProfileContainerProps = RouteComponentProps<PathParamsType> & MapDispatchToPropsType & MapStateToPropsType

class ProfileContainer extends React.Component<ProfileContainerProps> {
    componentDidMount() {
        let id = this.props.match.params.userID;
        this.props.getUserProfileThunk(id);
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to='/' />
        }

        return <Profile state={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profile: state.profileReducer,
        isAuth: state.authReducer.isAuth
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    updateUserProfile,
    setLoading,
    getUserProfileThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
