import {ActionsTypes, DialogsPageType} from './state';

const initialState = {
    dialogs: [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
        {id: 4, name: 'Name 4'},
        {id: 5, name: 'Name 5'},
    ],
    messages: [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Bye'},
    ],
    messagesInputValue: 'Add dialog'
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: new Date().getTime(),
                name: state.messagesInputValue
            };
            state.messages = [...state.messages, newMessage];
            state.messagesInputValue = '';
            return state;
        case 'UPDATE-MESSAGE':
            state.messagesInputValue = action.payload;
            return state;
        default:
            return state;
    }
}

export const updateMessageActionCreator = (payload: string) => ({type: 'UPDATE-MESSAGE', payload} as const)
export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'} as const)
