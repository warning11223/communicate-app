/*
import {addPostActionCreator, profileReducer, updateTextAreaActionCreate} from '../reducers/profileReducer';

test('post should be added', () => {
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

    const newState = profileReducer(initialState, addPostActionCreator())

    expect(newState.posts.length).toBe(7)
})

test('textarea should be updated', () => {
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

    const newState = profileReducer(initialState, updateTextAreaActionCreate('1'))

    expect(newState.textArea).toBe('1')
})
*/
export {}
