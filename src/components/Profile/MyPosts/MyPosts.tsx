import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostType, } from '../../../redux/state';
import Post from './Post/Post';
import {addPostActionCreator, updateTextAreaActionCreate} from '../../../reducers/profileReducer';

type MyPostsProps = {
    addPostHandler: () => void
    textAreaHandler: (value: string) => void
    posts: PostType[]
    textarea: string
}

const MyPosts: React.FC<MyPostsProps> = ({ addPostHandler, textAreaHandler, posts, textarea }) => {
    //const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const postsRender = posts.map((item) => {
        return <Post key={item.id} text={item.text}/>
    })

    const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        textAreaHandler(e.currentTarget.value)
        //dispatch(updateTextAreaActionCreate(e.currentTarget.value))
    }

    const onAddPost = () => {
        addPostHandler()
        //dispatch(addPostActionCreator())
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={textarea}
                    onChange={onChangeTextArea}
                    cols={30}
                    rows={10}
                />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postsRender}
            </div>
        </div>
    );
};

export default MyPosts;
