import {RootState} from '../../../redux/reduxStore';

export const getPosts = (state: RootState) => {
    return state.profileReducer.posts
}
export const getTextArea = (state: RootState) => {
    return state.profileReducer.textArea
}
