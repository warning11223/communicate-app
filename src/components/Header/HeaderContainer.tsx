import React from 'react';
import Header from './Header';
import {RootState} from '../../redux/reduxStore';
import {authAC, InitialAuthStateType} from '../../reducers/authReducer';
import {connect} from 'react-redux';
import {getAuthMeThunk} from '../../thunks/thunks';

export type GetAuthType = {
    data: InitialAuthStateType
}

type HeaderContainerType = {
    authAC: (email: string, id: number, login: string) => void
    authData: InitialAuthStateType
    getAuthMeThunk: () => void
}

class HeaderContainer extends React.Component<HeaderContainerType> {

    componentDidMount() {
        this.props.getAuthMeThunk();
    }

    render() {
        return <Header authData={this.props.authData}/>
    }
}

const mapStateToProps = (state: RootState) => {
    return {
        authData: state.authReducer
    }
}

const mapDispatchToProps = {
    authAC,
    getAuthMeThunk
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
