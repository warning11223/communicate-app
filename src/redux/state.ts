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
    text: string | undefined
}

export type DialogsPageType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

export type ProfilePageType = {
    posts: PostType[]
    textArea: string | undefined
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type StoreType = {
    _state: StateType
    addPost: () => void
    updateText: (text: string | undefined) => void
    subscribe: (observer: () => void) => void
    _rerenderEntireTree: () => void
    getState: () => StateType
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

        }
    },
    addPost() {
        const newPost = {
            id: new Date().getTime(),
            text: this._state.profilePage.textArea
        };
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.textArea = ''
        this._rerenderEntireTree()
    },
    updateText(text: string | undefined) {
        this._state.profilePage.textArea = text
        this._rerenderEntireTree()
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },
    _rerenderEntireTree () {
        console.log('State was changed')
    },
    getState() {
        return this._state
    },


}
