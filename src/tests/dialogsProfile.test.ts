import {addMessageActionCreator, dialogsReducer} from '../reducers/dialogsReducer';

test('message should be added', () => {
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

    const newState = dialogsReducer(initialState, addMessageActionCreator('hello'))

    expect(newState.messages.length).toBe(4)
})

/*test('input should be updated', () => {
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

    const newState = dialogsReducer(initialState, updateMessageActionCreator('hello'))

    expect(newState.messagesInputValue).toBe('hello')
})*/
