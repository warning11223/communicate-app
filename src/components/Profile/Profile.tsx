import React from 'react';

import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileStateType} from '../../reducers/profileReducer';

import image from '../../img/user-avatar.png'
import Preloader from '../Preloader/Preloader';

type ProfileProps = {
    state: ProfileStateType
}

const Profile: React.FC<ProfileProps> = ({state}) => {

    return (
        <div className={s.main}>
            {state.isLoading
                ? <Preloader/>
                : <div className={s.content}>
                    <div className={s.leftContent}>
                        <img className={s.avatar} src={state.photos.large ? state.photos.large : image} alt="avatar"/>

                        <MyPostsContainer/>

                    </div>
                    <div className={s.rightContent}>
                        {
                            state.aboutMe
                            && <div className={s.contentItem}>
                                <span className={s.spanItem}>About me: </span>
                                {state.aboutMe}
                            </div>
                        }
                        {
                            state.fullName &&
                            <div className={s.contentItem}>
                                <span className={s.spanItem}>Name: </span>
                                {state.fullName}
                            </div>
                        }
                        {
                            state.contacts.vk &&
                            <div className={s.contentItem}>
                                <span className={s.spanItem}>Vk: </span>
                                <a href="#">{state.contacts.vk}</a>
                            </div>
                        }
                        {
                            state.contacts.youtube &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Youtube: </span>
                                {state.contacts.youtube}
                            </div>
                        }
                        {
                            state.contacts.website &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Website: </span>
                                {state.contacts.website}
                            </div>
                        }
                        {
                            state.contacts.twitter &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Twitter: </span>
                                {state.contacts.twitter}
                            </div>
                        }
                        {
                            state.contacts.github &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Github: </span>
                                {state.contacts.github}
                            </div>
                        }
                        {
                            state.contacts.mainLink &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Main link: </span>
                                {state.contacts.mainLink}
                            </div>
                        }
                        {
                            state.contacts.instagram &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Instagram: </span>
                                {state.contacts.instagram}
                            </div>
                        }
                        {
                            state.contacts.facebook &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Facebook: </span>
                                {state.contacts.facebook}
                            </div>
                        }
                        {
                            state.lookingForAJob &&
                            <div className={s.contentItem}>
                            <span
                                className={s.spanItem}>Looking for a job: </span>{state.lookingForAJob ? 'Yes' : 'No'}
                            </div>
                        }
                    </div>

                </div>
            }

        </div>
    );
};

export default Profile;
