import React from 'react';

import s from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea cols={30} rows={10}></textarea>
                <button>Add post</button>
            </div>

        </div>
    );
};

export default MyPosts;
