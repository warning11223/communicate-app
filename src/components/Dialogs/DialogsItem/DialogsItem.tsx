import React from 'react';
import {NavLink, useLocation} from 'react-router-dom';

import s from './DialogsItem.module.css'

type DialogItemProps = {
    number: number
    name: string
}

export const DialogsItem: React.FC<DialogItemProps> = ({number, name}) => {
    const pathname = useLocation().pathname[9]

    return (
        <li>
            <NavLink className={`${number === +pathname ? `${s.activeDialog}` : ''}`} to={`/dialogs/${number}`}>{name}</NavLink>
        </li>
    );
};

