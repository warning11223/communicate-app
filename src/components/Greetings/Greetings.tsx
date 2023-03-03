import React from 'react';

import s from './Greetings.module.css'

const Greetings = () => {
    return (
        <div className={s.container}>
            <div className={s.title}>
                Welcome
            </div>
        </div>
    );
};

export default Greetings;
