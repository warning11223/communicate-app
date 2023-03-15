import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from '../../reducers/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {DialogsPageType} from '../../redux/state';
import {Redirect} from 'react-router-dom';

type DialogsContainerProps = {
    dialogsState: DialogsPageType
    onChangeTextareaHandler: (value: string) => void
    addMessageHandler: () => void
    isAuth: boolean | null
}

const DialogsContainer: React.FC<DialogsContainerProps> = ({
                                                               dialogsState,
                                                               onChangeTextareaHandler,
                                                               addMessageHandler,
                                                               isAuth
                                                           }) => {
    if (!isAuth) {
        return <Redirect to="/"/>
    }

    return (
        <Dialogs state={dialogsState} onChangeTextareaHandler={onChangeTextareaHandler}
                 addMessageHandler={addMessageHandler}/>
    )
};

type MapStateToPropsType = {
    dialogsState: DialogsPageType
    isAuth: boolean | null
}
type MapDispatchToPropsType = {
    onChangeTextareaHandler: (value: string) => void
    addMessageHandler: () => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogsState: state.dialogsReducer,
        isAuth: state.authReducer.isAuth
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        onChangeTextareaHandler: (value: string) => dispatch(updateMessageActionCreator(value)),
        addMessageHandler: () => dispatch(addMessageActionCreator()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
