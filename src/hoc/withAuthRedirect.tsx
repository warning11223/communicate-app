import {ComponentType} from 'react';
import {connect} from 'react-redux';
import {RootState} from '../redux/reduxStore';
import {Redirect} from 'react-router-dom';

type MapStateToPropsType = {
    isAuth: boolean | null
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        isAuth: state.authReducer.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: MapStateToPropsType) => {

        let {isAuth, ...restProps} = props;

        if (!props.isAuth) {
            return <Redirect to="/"/>
        }

        return <Component {...restProps as T}/>
    }

    let ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);
    return ConnectedRedirectComponent;
}
