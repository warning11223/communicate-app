import React, {ChangeEvent} from 'react';
import {ActionType, addPostActionCreator, PostType, updateTextAreaActionCreate} from '../../../redux/state';
import Post from './Post/Post';

type MyPostsProps = {
    posts: PostType[]
    dispatch: (action: ActionType) => void
    textarea: string
}

const MyPosts: React.FC<MyPostsProps> = ({posts, textarea, dispatch}) => {
    //const textAreaRef = useRef<HTMLTextAreaElement>(null)

    const postsRender = posts.map(item => {
        return <Post key={item.id} text={item.text}/>
    })

    const textAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        //dispatch({type: 'UPDATE-TEXT', payload: textAreaRef.current?.value})
        dispatch(updateTextAreaActionCreate(e.currentTarget.value))
    }

    const addPostHandler = () => {
        //dispatch({type: 'ADD-POST'})
        dispatch(addPostActionCreator())
    }

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea
                    value={textarea}
                    onChange={textAreaHandler}
                    cols={30}
                    rows={10}
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
