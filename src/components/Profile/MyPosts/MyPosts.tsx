import React, {ChangeEvent, useRef} from 'react';
import {PostType} from '../../../redux/state';
import Post from './Post/Post';

type MyPostsProps = {
    posts: PostType[]
    addPost: () => void
    updateText: (text: string | undefined) => void
    textarea: string | undefined
}

const MyPosts: React.FC<MyPostsProps> = ({posts, addPost, updateText, textarea}) => {
    const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const postsRender = posts.map(item => {
        return <Post key={item.id} text={item.text}/>
    })

    const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        updateText(textAreaRef.current?.value)
    }

    const addPostHandler = () => {
        addPost()
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea
                    ref={textAreaRef}
                    value={textarea}
                    onChange={textAreaHandler}
                    cols={30}
                    rows={10}
                    autoFocus
                />
                <button onClick={addPostHandler}>Add post</button>
            </div>
            <div>
                {postsRender}
            </div>
        </div>
    );
};

export default MyPosts;
