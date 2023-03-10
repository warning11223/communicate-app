import React from 'react';
import {Link, NavLink} from 'react-router-dom';

import s from './Header.module.css'
import {InitialAuthStateType} from '../../reducers/authReducer';

type HeaderType = {
    authData: InitialAuthStateType
}

const Header: React.FC<HeaderType> = ({authData}) => {
    return (
        <div className={s.header}>
            <Link to="/" className={s.headerLogo}>
                Social network
            </Link>
            <div>
                <span className={s.login}>
                    {
                        authData.isAuth
                            ? authData.email
                            : <NavLink to="/login">Login</NavLink>
                    }
                </span>
            </div>
        </div>
    );
};

export default Header;
