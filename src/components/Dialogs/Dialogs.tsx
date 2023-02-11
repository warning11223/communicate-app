import React, {ChangeEvent} from 'react';
import {DialogsPageType} from '../../redux/state';

import s from './Dialogs.module.css'
import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';

type DialogsProps = {
    state: DialogsPageType
    onChangeTextareaHandler: (value: string) => void
    addMessageHandler: () => void
}

const Dialogs: React.FC<DialogsProps> = ({state, onChangeTextareaHandler, addMessageHandler}) => {
    const messagesRender = state.messages.map(item=> <Message name={item.name} key={item.id}/>)
    const dialogsRender = state.dialogs.map(item => <DialogsItem key={item.id} number={item.id} name={item.name} />)

    const onChangeTextarea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChangeTextareaHandler(e.currentTarget.value)
    }

    const addMessage = () => {
        addMessageHandler()
    }

    return (
        <div className={s.container}>
            <ul>
                {dialogsRender}
            </ul>
            <div>
                {messagesRender}
                <div>
                    <textarea
                        cols={25}
                        rows={5}
                        placeholder='Add message'
                        value={state.messagesInputValue}
                        onChange={onChangeTextarea}
                    />
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;
