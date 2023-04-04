import React from 'react';
import Dialogs from './Dialogs';
import {addMessageActionCreator} from '../../reducers/dialogsReducer';
import {connect} from 'react-redux';
import {AppDispatch, RootState} from '../../redux/reduxStore';
import {DialogsPageType} from '../../redux/state';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

type DialogsContainerProps = {
    dialogsState: DialogsPageType
    addMessageHandler: () => void
    isAuth: boolean | null
}

const DialogsContainer: React.FC<DialogsContainerProps> = ({
                                                               dialogsState,
                                                               addMessageHandler,
                                                           }) => {
    return (
        <Dialogs state={dialogsState}
                 addMessageHandler={addMessageHandler}/>
    )
};

type MapStateToPropsType = {
    dialogsState: DialogsPageType
}
type MapDispatchToPropsType = {
    addMessageHandler: (message: string) => void
}

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        dialogsState: state.dialogsReducer,
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
