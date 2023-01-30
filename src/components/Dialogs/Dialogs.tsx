import React from 'react';
import {DialogType, MessageType} from '../../redux/state';

import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

type DialogsProps = {
    messages: MessageType[]
    dialogs: DialogType[]
}

const Dialogs: React.FC<DialogsProps> = ({messages, dialogs}) => {
    const messagesRender = messages.map(item => {
        return <Message name={item.name} key={item.id}/>
    })
    const dialogsRender = dialogs.map(item => {
        return <DialogsItem key={item.id} number={item.id} name={item.name} />
    })

    return (
        <div className={s.container}>
            <ul>
                {dialogsRender}
            </ul>
            <div>
                {messagesRender}
            </div>
        </div>
    );
};

export default Dialogs;
