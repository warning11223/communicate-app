import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateTextAreaActionCreate} from '../../../redux/profileReducer';
import {StoreContext} from '../../../StoreContext';

type MyPostsContainerProps = {}

const MyPostsContainer: React.FC<MyPostsContainerProps> = ({}) => {

    return (
        <StoreContext.Consumer>
            {
                store => {
                    const textAreaHandler = (value: string) => {
                        store.dispatch(updateTextAreaActionCreate(value))
                    }
                    const addPostHandler = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const state = store.getState();

                    return <MyPosts textAreaHandler={textAreaHandler} addPostHandler={addPostHandler}
                                    posts={state.profileReducer.posts} textarea={state.profileReducer.textArea}/>
                }
            }
        </StoreContext.Consumer>
    )
};

export default MyPostsContainer;
