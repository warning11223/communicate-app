import React from 'react';

import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
import {PostType, StoreType} from '../../redux/state';

type ProfileProps = {
    store: StoreType
}

const Profile: React.FC<ProfileProps> = ({store}) => {
    const state = store.getState();

    return (
        <div className={s.main}>
            <div className={s.content}>
                <div>Main content</div>
                <div>ava + desc</div>

                <MyPosts
                    posts={state.profilePage.posts}
                    addPost={store.addPost.bind(store)}
                    updateText={store.updateText.bind(store)}
                    textarea={state.profilePage.textArea}
                />

            </div>

        </div>
    );
};

export default Profile;
