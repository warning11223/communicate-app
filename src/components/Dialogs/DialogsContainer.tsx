import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../reducers/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {DialogType, MessageType} from '../../redux/state';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';
import {getDialogs, getMessages} from './dialogs-selectors';

type DialogsContainerProps = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessageHandler: () => void
    isAuth: boolean | null
}

const DialogsContainer: React.FC<DialogsContainerProps> = ({
                                                               dialogs,
                                                               messages,
                                                               addMessageHandler,
                                                           }) => {
    return (
        <Dialogs
            dialogs={dialogs}
            messages={messages}
            addMessageHandler={addMessageHandler}
        />
    )
};

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type MapDispatchToPropsType = {
    addMessageHandler: (message: string) => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state)
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        addMessageHandler: (message: string) => dispatch(addMessageActionCreator(message)),
    }
}

//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsContainer)
