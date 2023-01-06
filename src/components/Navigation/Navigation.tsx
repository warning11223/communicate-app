import React from 'react';

import s from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={s.nav}>
            <ul>
                <li>
                    <a className={`${s.navLink} ${s.active}`} href="#">Profile</a>
                </li>
                <li>
                    <a className={s.navLink} href="#">Messages</a>
                </li>
                <li>
                    <a className={s.navLink} href="#">News</a>
                </li>
                <li>
                    <a className={s.navLink} href="#">Music</a>
                </li>
                <li>
                    <a className={s.navLink} href="#">Settings</a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;
