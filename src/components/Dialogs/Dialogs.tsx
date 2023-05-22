import React from 'react';
import {DialogType, MessageType} from '../../redux/state';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import s from './Dialogs.module.css'
import {maxLength, minLength, required, Textarea} from '../common/FormControls/FormControls';
import {Button} from '../common';
import {DialogsItem} from './DialogsItem/DialogsItem';
import {Message} from './Message/Message';

type DialogsProps = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessageHandler: (message: string) => void
}

const maxLength100 = maxLength(100);
const minLength2 = minLength(2)

export const Dialogs: React.FC<DialogsProps> = ({dialogs, addMessageHandler, messages}) => {
    const messagesRender = dialogs.map(item => <Message name={item.name} key={item.id}/>)
    const dialogsRender = messages.map(item => <DialogsItem key={item.id} number={item.id} name={item.name}/>)

    const addMessage = (formData: FormDataType) => {
        addMessageHandler(formData.message)
        formData.message = ''
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
                <Field
                    name="message"
                    component={Textarea}
                    placeholder="Type for new message..."
                    validate={[required, maxLength100, minLength2]}
                />
            </div>

            <div>
               <Button>Add message</Button>
            </div>

        </form>
    )
}

const AddMessageReduxForm = reduxForm<FormDataType, {}>({
    form: 'message'
})(AddMessageForm)

