import React from 'react';

import s from './Header.module.css'

const Header = () => {
    return (
        <div className={s.header}>
            <a className={s.headerLogo} href="#">Social network</a>
        </div>
    );
};

export default Header;
