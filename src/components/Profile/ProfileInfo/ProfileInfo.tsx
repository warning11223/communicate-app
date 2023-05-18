import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStateType} from '../../../redux/reducers/profile/profileReducer';

import edit from '../../../assets/img/edit.png'

type PropsType = {
    state: ProfileStateType
}

const ProfileInfo: React.FC<PropsType> = ({state}) => {

    return (
        <div >
            <div className={s.profileHeader}>
                <h3 className={s.profileInfo}>My profile info: </h3>
                <img className={s.profileBtnIcon} src={edit} alt="edit"/>
            </div>

            <div className={s.contentItem}>
                <span className={s.spanItem}>
                    Name: <span className={s.spanText}>{state.fullName ? state.fullName : '-'}</span>
                </span>
            </div>
            <div className={s.contentItem}>
                <span className={s.spanItem}>
                    About me: <span className={s.spanText}>{state.aboutMe ? state.aboutMe : '-'}</span>
                </span>
            </div>
            <div className={s.contentItem}>
                <span className={s.spanItem}>
                    Looking for a job: <span className={s.spanText}>{state.lookingForAJob ? 'Yes' : 'No'}</span>
                </span>
            </div>

            <div className={s.contentItem}>
                <ul className={s.contentList}>
                    <span className={s.listItem}>Contacts:</span>
                    {
                        Object.entries(state.contacts).map((item, index) => {
                            return (
                                <li key={index} className={s.listElement}>
                                    {item[0]}: <span className={s.listElementSpan}>{item[1] ? item[1] : 'no info 😕'}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>


           {/* {
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
                        className={s.spanItem}>Youtube:
                    </span>
                    {state.contacts.youtube}
                </div>
            }
            {
                state.contacts.website &&
                <div className={s.contentItem}>
                    <span
                        className={s.spanItem}>Website:
                    </span>
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
            }*/}
        </div>
    );
};

export default ProfileInfo;
