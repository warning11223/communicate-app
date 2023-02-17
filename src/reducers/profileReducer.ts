import {ActionsTypes, ProfilePageType} from '../redux/state';

const initialState = {
    textArea: 'Add post',
    posts: [
        {id: 1, text: 'post1'},
        {id: 2, text: 'post2'},
        {id: 3, text: 'post3'},
        {id: 4, text: 'post4'},
        {id: 5, text: 'post5'},
        {id: 6, text: 'post6'},
    ],

};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost = {
                id: new Date().getTime(),
                text: state.textArea
            };
            return {...state, posts: [...state.posts, newPost], textArea: ''};
        case 'UPDATE-TEXT':
            return {...state, textArea: action.payload.text};
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
} as const)

export const updateTextAreaActionCreate = (payload: string) => ({
    type: 'UPDATE-TEXT', payload: { text: payload }
} as const)
