import {RootState} from '../../redux/reduxStore';

export const getDialogs = (state: RootState) => {
    return state.dialogsReducer.dialogs
}
export const getMessages = (state: RootState) => {
    return state.dialogsReducer.messages
}
