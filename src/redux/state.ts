import {addPostAC, updateTextAreaAC} from './reducers/profileReducer';
import {addMessageActionCreator, dialogsReducer} from './reducers/dialogsReducer';

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    name: string
}

export type PostType = {
    id: number
    text: string
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
    messagesInputValue: string
}

export type ProfilePageType = {
    posts: PostType[]
    textArea: string
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: DialogsReducerActionsType) => void

}

export const store: StoreType = {
    _state: {
        dialogsPage: {
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
            messagesInputValue: ''
        },
        profilePage: {
            textArea: 'hello world',
            posts: [
                {id: 1, text: 'post1'},
                {id: 2, text: 'post2'},
                {id: 3, text: 'post3'},
                {id: 4, text: 'post4'},
                {id: 5, text: 'post5'},
                {id: 6, text: 'post6'},
            ],

        },
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber () {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },
    dispatch(action) {
        //this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

        this._callSubscriber();
    }


}

export type DialogsReducerActionsType = ReturnType<typeof addPostAC> | ReturnType<typeof updateTextAreaAC> | ReturnType<typeof addMessageActionCreator>




