import React from 'react';
import {DialogsPageType} from '../../redux/state';

import DialogsItem from './DialogsItem/DialogsItem';
import Message from './Message/Message';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import s from './Dialogs.module.css'

type DialogsProps = {
    state: DialogsPageType
    addMessageHandler: (message: string) => void
}

const Dialogs: React.FC<DialogsProps> = ({state, addMessageHandler}) => {
    const messagesRender = state.messages.map(item => <Message name={item.name} key={item.id}/>)
    const dialogsRender = state.dialogs.map(item => <DialogsItem key={item.id} number={item.id} name={item.name}/>)

    const addMessage = (formData: FormDataType) => {
        addMessageHandler(formData.message)
    }

    return (
        <div className={s.container}>
            <ul>
                {dialogsRender}
            </ul>
            <div>
                {messagesRender}
                <AddMessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
};

type FormDataType = {
    message: string
}

let AddMessageForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="message" component="textarea" placeholder="Type for new message..."
                       className={s.textarea}/>
            </div>

            <div>
                <div className={s.wrapper}>
                    <button className={s.button} type="submit">
                        Add
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType, {}>({
    form: 'message'
})(AddMessageForm)

export default Dialogs;
