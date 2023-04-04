import React from 'react';
import MyPosts from './MyPosts';
import {addPostAC} from '../../../reducers/profileReducer';
import {AppDispatch, RootState} from '../../../redux/reduxStore';
import {connect} from 'react-redux';
import {PostType} from '../../../redux/state';

type MyPostsContainerProps = {
    posts: PostType[]
    textarea: string
    addPostHandler: (post: string) => void
}

type MapStateToPropsType = {
    posts: PostType[]
    textarea: string
}

type MapDispatchToPropsType = {
    addPostHandler: (post: string) => void
}

const MyPostsContainer: React.FC<MyPostsContainerProps> = ({ posts, textarea, addPostHandler }) => {

    return (
        <MyPosts
            addPostHandler={addPostHandler}
            posts={posts}
            textarea={textarea}
        />
    )
};

const mapStateToProps = (state: RootState): MapStateToPropsType => {
    return {
        posts: state.profileReducer.posts,
        textarea: state.profileReducer.textArea,
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        addPostHandler: (post: string) => dispatch(addPostAC(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
