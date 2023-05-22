import React from 'react';
import {addPostAC} from '../../../redux';
import {AppDispatch, RootState} from '../../../redux/reduxStore';
import {connect} from 'react-redux';
import {PostType} from '../../../redux/state';
import {getPosts, getTextArea} from './posts-selectors';
import {MyPosts} from './MyPosts';

const MyPostsContainer: React.FC<MyPostsContainerProps> = ({posts, textarea, addPostHandler}) => {

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
        posts: getPosts(state),
        textarea: getTextArea(state),
    }
}

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchToPropsType => {
    return {
        addPostHandler: (post: string) => dispatch(addPostAC(post)),
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);
