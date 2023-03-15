import React from 'react';

import s from './Settings.module.css'
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/reduxStore';
import {Redirect} from 'react-router-dom';

const Settings = () => {
    const { isAuth } = useSelector((state: RootState) => state.authReducer)

    if (!isAuth) {
        return <Redirect to="/"/>
    }

    return (
        <div className={s.wrapper}>
            <h2>Engineering works ⚙️</h2>
        </div>
    );
};

export default Settings;
