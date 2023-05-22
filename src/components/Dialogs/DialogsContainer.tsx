import React from 'react';
import {addMessageActionCreator} from '../../redux';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {DialogType, MessageType} from '../../redux/state';
import {withAuthRedirect} from '../../hoc';
import {compose} from 'redux';
import {getDialogs, getMessages} from './dialogs-selectors';
import {Dialogs} from './Dialogs';



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

type MapStateToPropsType = {
    dialogs: DialogType[]
    messages: MessageType[]
}
type MapDispatchToPropsType = {
    addMessageHandler: (message: string) => void
}

type DialogsContainerProps = {
    dialogs: DialogType[]
    messages: MessageType[]
    addMessageHandler: () => void
    isAuth: boolean | null
}
//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsContainer)
