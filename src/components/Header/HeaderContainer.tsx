import React from 'react';
import Header from './Header';
import {RootState} from '../../redux/reduxStore';
import {authAC, getAuthMeThunk, InitialAuthStateType} from '../../redux/reducers/auth/authReducer';
import {connect} from 'react-redux';
import {getAuthData} from './header-selectors';

export type GetAuthType = {
    data: InitialAuthStateType
}

type HeaderContainerType = {
    authAC: (email: string, id: number, login: string) => void
    authData: InitialAuthStateType
}

class HeaderContainer extends React.Component<HeaderContainerType> {
    render() {
        return <Header authData={this.props.authData}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        authData: getAuthData(state)
    }
}

const mapDispatchToProps = {
    authAC,
    getAuthMeThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
