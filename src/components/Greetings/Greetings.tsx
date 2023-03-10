import React from 'react';

import s from './Greetings.module.css'
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore';
import Preloader from '../Preloader/Preloader';

const Greetings = () => {
    const {login, isAuth} = useSelector((state: RootState) => state.authReducer);

    return (
        <div className={s.container}>
            {isAuth
                ? <div className={s.title}>
                    {`Welcome, ${login}👋`}
                </div>
                : <Preloader/>
            }

        </div>
    );
};

export default Greetings;
