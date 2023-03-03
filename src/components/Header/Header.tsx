import React from 'react';
import { Link } from 'react-router-dom';

import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <Link to='/' className={s.headerLogo}>
                Social network
            </Link>
        </div>
    );
};

export default Header;
