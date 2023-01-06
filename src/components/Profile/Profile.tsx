import React from 'react';

import s from './Profile.module.css'
import MyPosts from "../MyPosts/MyPosts";
import Post from "../Post/Post";


const Profile = () => {
    return (
        <div className={s.main}>
            <div className={s.content}>
                Main content
                <div>ava + desc</div>

                <MyPosts />

                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>

        </div>
    );
};

export default Profile;
