import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStateType} from '../../../reducers/profileReducer';



type PropsType = {
    state: ProfileStateType
}

const ProfileInfo: React.FC<PropsType> = ({state}) => {
    return (
        <div>
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
    );
};

export default ProfileInfo;
