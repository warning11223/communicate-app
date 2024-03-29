import {DialogsReducerActionsType, DialogsPageType} from '../../state';

const initialState = {
    dialogs: [
        {id: 1, name: 'Name 1'},
        {id: 2, name: 'Name 2'},
        {id: 3, name: 'Name 3'},
    ],
    messages: [
        {id: 1, name: 'Hi'},
        {id: 2, name: 'How are you?'},
        {id: 3, name: 'Bye'},
    ],
    messagesInputValue: ''
};

export const dialogsReducer = (state: DialogsPageType = initialState, action: DialogsReducerActionsType) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            const newMessage = {
                id: new Date().getTime(),
                name: action.message
            };
            return {...state, messages: [...state.messages, newMessage], messagesInputValue: ''};
        default:
            return state;
    }
}

export const addMessageActionCreator = (message: string) => ({
    type: 'ADD-MESSAGE',
    message
} as const)
