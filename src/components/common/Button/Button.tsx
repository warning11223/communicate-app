import React from 'react';

import s from './Button.module.css'
import {InitialAuthStateType} from '../../../redux/reducers/authReducer';

type ButtonPropsType = {
    callback?: () => void
    authData?: InitialAuthStateType
    children: React.ReactNode
}

export const Button: React.FC<ButtonPropsType> = ({authData, callback, children}) => {
    return (
        <div>
            <div className={s.wrapper}>
                <button className={s.button} onClick={callback}>
                    {children}
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
    );
};


