import React from 'react';
import {connect} from 'react-redux';
import Profile from './Profile';
import axios from 'axios';
import {ProfileResponseType, ProfileStateType, setLoading, updateUserProfile} from '../../reducers/profileReducer';
import {RootState} from '../../redux/reduxStore';
import {RouteComponentProps, withRouter} from 'react-router-dom';

type MapDispatchToPropsType = {
    updateUserProfile : (userResponse: ProfileResponseType) => void
    setLoading: (value: boolean) => void
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

        this.props.setLoading(true);
        axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${id || '11'}`)
            .then(response => {
                this.props.setLoading(false);
                this.props.updateUserProfile(response.data)
            })
    }

    render() {
        return <Profile state={this.props.profile}/>
    }
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        profile: state.profileReducer
    }
}

const mapDispatchToProps: MapDispatchToPropsType = {
    updateUserProfile,
    setLoading
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
