import React from 'react';
import {PostType,} from '../../../redux/state';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {maxLength, minLength, required, Textarea} from '../../common/FormControls/FormControls';
import {Button} from '../../common';
import {Post} from './Post/Post';

import s from './MyPosts.module.css'

const maxLength100 = maxLength(100);
const minLength2 = minLength(2)

export const MyPosts: React.FC<MyPostsProps> = ({ addPostHandler, posts }) => {

    const postsRender = posts.map((item) => {
        return <Post key={item.id} text={item.text}/>
    })

    const onAddPost = (formData: FormDataType) => {
        addPostHandler(formData.post)
        formData.post = ''
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

const AddPostForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} className={s.postsForm}>
            <div>
                <Field
                    name="post"
                    component={Textarea}
                    label="Add new post"
                    placeholder={"Add new post..."}
                    validate={[required, maxLength100, minLength2]}
                />
            </div>

            <div>
                <Button>Add post</Button>
            </div>
        </form>
    )
}

const AddPostReduxForm = reduxForm<FormDataType, {}>({
    form: 'post'
})(AddPostForm)

type MyPostsProps = {
    addPostHandler: (post: string) => void
    posts: PostType[]
    textarea: string
}

type FormDataType = {
    post: string
}

