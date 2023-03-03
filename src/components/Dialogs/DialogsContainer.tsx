import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator, updateMessageActionCreator} from '../../reducers/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {DialogsPageType} from '../../redux/state';

type DialogsContainerProps = {
    dialogsState: DialogsPageType
    onChangeTextareaHandler: (value: string) => void
    addMessageHandler: () => void
}

const DialogsContainer: React.FC<DialogsContainerProps> = ({dialogsState, onChangeTextareaHandler, addMessageHandler}) => {

    return (
        /*<StoreContext.Consumer>
            {
                store => {
                    const onChangeTextareaHandler = (value: string) => store.dispatch(updateMessageActionCreator(value))
                    const addMessageHandler = () => store.dispatch(addMessageActionCreator())
                    const state = store.getState().dialogsReducer;

                    return <Dialogs state={state} onChangeTextareaHandler={onChangeTextareaHandler} addMessageHandler={addMessageHandler} />
                }
            }
        </StoreContext.Consumer>*/

        <Dialogs state={dialogsState} onChangeTextareaHandler={onChangeTextareaHandler} addMessageHandler={addMessageHandler} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DialogsContainer);
