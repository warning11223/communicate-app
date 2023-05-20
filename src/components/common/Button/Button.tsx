import React from 'react';

import s from './Button.module.css'
import {InitialAuthStateType} from '../../../redux/reducers/auth/authReducer';

type ButtonPropsType = {
    callback?: () => void
    authData?: InitialAuthStateType
    children: React.ReactNode
    type?: 'button' | 'submit'
}

export const Button: React.FC<ButtonPropsType> = ({authData, callback, children, type}) => {
    return (
        <div>
            <div className={s.wrapper}>
                <button className={s.button} onClick={callback} type={type}>
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


