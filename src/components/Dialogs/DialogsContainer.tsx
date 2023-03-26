import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from '../../reducers/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {DialogsPageType} from '../../redux/state';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

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
                                                           }) => {
    return (
        <Dialogs state={dialogsState} onChangeTextareaHandler={onChangeTextareaHandler}
                 addMessageHandler={addMessageHandler}/>
    )
};

type MapStateToPropsType = {
    dialogsState: DialogsPageType
}
type MapDispatchToPropsType = {
    onChangeTextareaHandler: (value: string) => void
    addMessageHandler: () => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogsState: state.dialogsReducer,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        onChangeTextareaHandler: (value: string) => dispatch(updateMessageActionCreator(value)),
        addMessageHandler: () => dispatch(addMessageActionCreator()),
    }
}

//export default withAuthRedirect(connect(mapStateToProps, mapDispatchToProps)(DialogsContainer));
export default compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(DialogsContainer)
