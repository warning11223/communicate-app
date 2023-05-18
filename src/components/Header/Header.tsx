import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import {InitialAuthStateType, logoutTC} from '../../redux/reducers/auth/authReducer';
import {useDispatch} from 'react-redux';

import s from './Header.module.css'
import {Button} from '../common/Button/Button';

type HeaderType = {
    authData: InitialAuthStateType
}

const Header: React.FC<HeaderType> = ({authData}) => {
    const dispatch = useDispatch();

    const logoutHandler = () => {
        dispatch(logoutTC());
    }

    return (
        <div className={s.header}>
            <Link to="/" className={s.headerLogo}>
                Social network
            </Link>
            <div style={{zIndex: 1}}>
                <span className={s.login}>
                    {
                        authData.isAuth && authData.login !== null
                            ?
                            <Button callback={logoutHandler} authData={authData}>{`${authData.login} (Logout)`}</Button>
                            :
                            <NavLink to="/login">
                                <Button>Login</Button>
                            </NavLink>
                    }
                </span>
            </div>
        </div>
    );
};

export default Header;
