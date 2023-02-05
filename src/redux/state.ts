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
}

export type ProfilePageType = {
    posts: PostType[]
    textArea: string
}

export type StateType = {
    dialogsPage: DialogsPageType
    profilePage: ProfilePageType
}

export type ActionType = {
    type: 'ADD-POST' | 'UPDATE-TEXT'
    payload?: any
}

export type StoreType = {
    _state: StateType
    addPost: () => void
    updateText: (text: string) => void
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionType) => StateType | undefined
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
        this._state.profilePage.posts = [...this._state.profilePage.posts, newPost]
        //this._state.profilePage.posts.push(newPost)
        this._state.profilePage.textArea = ''
        this._callSubscriber()
    },
    updateText(text: string) {
        this._state.profilePage.textArea = text
        this._callSubscriber()
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
        switch (action.type) {
            case 'ADD-POST':
                this.addPost();
                break;
            case 'UPDATE-TEXT':
                this.updateText(action.payload)
                break;
            default:
                return this._state
        }
    }


}

type AddPostActionCreatorType = () => ActionType
type UpdateTextAreaActionCreateType = (payload: any) => ActionType

export const addPostActionCreator: AddPostActionCreatorType = () => ({type: 'ADD-POST'})
export const updateTextAreaActionCreate: UpdateTextAreaActionCreateType  = (payload) => ({type: 'UPDATE-TEXT', payload})
