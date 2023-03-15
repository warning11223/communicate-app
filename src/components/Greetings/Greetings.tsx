import React from 'react';

import s from './Greetings.module.css'
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore';

const Greetings = () => {
    const {login, isAuth} = useSelector((state: RootState) => state.authReducer);

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
