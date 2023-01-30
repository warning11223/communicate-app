import React from 'react';
import {Link, useLocation} from 'react-router-dom';

import s from './Navigation.module.css'

const Navigation = () => {
    const pathname = useLocation().pathname

    return (
        <div className={s.nav}>
            <ul>
                <li>
                    <Link className={`${s.navLink} ${pathname === '/' ? `${s.active}` : ''}`} to='/'>Profile</Link>
                </li>
                <li>
                    <Link className={`${s.navLink} ${pathname === '/dialogs' ? `${s.active}` : ''}`}  to='/dialogs'>Dialogs</Link>
                </li>
                <li>
                    <Link className={`${s.navLink} ${pathname === '/news' ? `${s.active}` : ''}`}  to='/news'>News</Link>
                </li>
                <li>
                    <Link className={`${s.navLink} ${pathname === '/music' ? `${s.active}` : ''}`}  to='/music'>Music</Link>
                </li>
                <li>
                    <Link className={`${s.navLink} ${pathname === '/settings' ? `${s.active}` : ''}`}  to='/settings'>Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
