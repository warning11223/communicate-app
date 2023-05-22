import React from 'react';

import s from './Settings.module.css'
import {withAuthRedirect} from '../../hoc';


const Settings = () => {
    return (
        <div className={s.wrapper}>
            <h2>Engineering works ⚙️</h2>
        </div>
    );
};

export default withAuthRedirect(Settings);
