import React from 'react';
import user from '../../img/user.png'

import s from './Post.module.css'

const Post = () => {
    return (
        <div className={s.postContainer}>
            <img className={s.userImage} src={user} alt="user logo"/>
            <span>post1</span>
        </div>
    );
};

export default Post;
