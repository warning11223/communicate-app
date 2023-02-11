import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from '../../redux/dialogsReducer';
import {StoreContext} from '../../StoreContext';

type DialogsContainerProps = {

}

const DialogsContainer: React.FC<DialogsContainerProps> = ({  }) => {


    return (
        <StoreContext.Consumer>
            {
                store => {
                    const onChangeTextareaHandler = (value: string) => store.dispatch(updateMessageActionCreator(value))
                    const addMessageHandler = () => store.dispatch(addMessageActionCreator())
                    const state = store.getState().dialogsReducer;

                    return <Dialogs state={state} onChangeTextareaHandler={onChangeTextareaHandler} addMessageHandler={addMessageHandler} />
                }
            }
        </StoreContext.Consumer>
    )
};

export default DialogsContainer;
