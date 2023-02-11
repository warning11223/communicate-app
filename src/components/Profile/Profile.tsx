import React from 'react';

import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';

type ProfileProps = {

}

const Profile: React.FC<ProfileProps> = ({}) => {

    return (
        <div className={s.main}>
            <div className={s.content}>
                <div>Main content</div>
                <div>ava + desc</div>

                <MyPostsContainer />

            </div>

        </div>
    );
};

export default Profile;
