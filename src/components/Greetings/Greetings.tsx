import React from 'react';

import s from './Greetings.module.css'
import {useSelector} from 'react-redux';
import {useAppSelector} from '../../redux';
import {getAuthLoading, getIsAuth, getIsLogin} from '../../redux';
import {Preloader} from '../common';

export const Greetings = () => {
    const login = useAppSelector(getIsLogin);
    const isAuth = useAppSelector(getIsAuth)
    const loading = useSelector(getAuthLoading);

    if (loading === 'loading') {
        return (
            <div style={{position: 'fixed', top: '10%', textAlign: 'center', width: '100%'}}>
                <Preloader/>
            </div>
        )
    }

    return (
        <div className={s.container}>
            {isAuth
                ? <div className={s.title}>
                    {`Welcome, ${login}👋`}
                </div>
                : <div className={s.title}>
                    {`Login, please 😢`}
                </div>
            }

        </div>
    );
};
