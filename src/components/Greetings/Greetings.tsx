import React from 'react';

import s from './Greetings.module.css'
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore';
import Preloader from '../common/Preloader/Preloader';

const Greetings = () => {
    const {login, isAuth} = useSelector((state: RootState) => state.authReducer);
    const loading = useSelector((state: RootState) => state.authReducer.loading);

    if (loading === 'loading') {
        return (
            <div style={{position: 'fixed', top: '10%', textAlign: 'center', width: '100%'}}>
                <Preloader />
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

export default Greetings;
