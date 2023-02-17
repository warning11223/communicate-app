import React from 'react';
import MyPosts from './MyPosts';
import {addPostActionCreator, updateTextAreaActionCreate} from '../../../reducers/profileReducer';
import {AppDispatch, RootState} from '../../../redux/reduxStore';
import {connect} from 'react-redux';
import {PostType} from '../../../redux/state';

type MyPostsContainerProps = {
    posts: PostType[]
    textarea: string
    textAreaHandler: (value: string) => void
    addPostHandler: () => void
}

const MyPostsContainer: React.FC<MyPostsContainerProps> = ({ posts, textarea, addPostHandler, textAreaHandler }) => {

    return (
       /* <StoreContext.Consumer>
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
        </StoreContext.Consumer>*/
        <MyPosts
            textAreaHandler={textAreaHandler}
            addPostHandler={addPostHandler}
            posts={posts}
            textarea={textarea}
        />
    )
};

const mapStateToProps = (state: RootState) => {
    return {
        posts: state.profileReducer.posts,
        textarea: state.profileReducer.textArea,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch) => {
    return {
        textAreaHandler: (value: string) => dispatch(updateTextAreaActionCreate(value)),
        addPostHandler: () => dispatch(addPostActionCreator())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
