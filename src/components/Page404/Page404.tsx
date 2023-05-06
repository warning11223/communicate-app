import React from 'react';

import s from './Page404.module.css'
import page404 from '../../img/404.png'

export const Page404 = () => {
    return (
        <div className={s.container}>
            <img src={page404} alt="404"/>
        </div>
    );
};

