import React from 'react';
import {PostType,} from '../../../redux/state';
import Post from './Post/Post';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import s from './MyPosts.module.css'

type MyPostsProps = {
    addPostHandler: (post: string) => void
    posts: PostType[]
    textarea: string
}

const MyPosts: React.FC<MyPostsProps> = ({ addPostHandler, posts }) => {

    const postsRender = posts.map((item) => {
        return <Post key={item.id} text={item.text}/>
    })

    const onAddPost = (formData: FormDataType) => {
        addPostHandler(formData.post)
    }

    return (
        <div>
            <h3>My posts</h3>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div>
                {postsRender}
            </div>
        </div>
    );
};

type FormDataType = {
    post: string
}

const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="post" component="textarea" placeholder='Add new post' className={s.textarea} />
            </div>

            <div>
                <div className={s.wrapper}>
                    <button className={s.button} type="submit">
                        Add
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType, {}>({
    form: 'post'
})(AddPostForm)

export default MyPosts;
