import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileStateType} from '../../../redux/reducers/profile/profileReducer';

import edit from '../../../assets/img/edit.png'
import {ProfileForm} from './ProfileForm/ProfileForm';

type PropsType = {
    state: ProfileStateType
    isOwner: boolean
}

const ProfileInfo: React.FC<PropsType> = ({state, isOwner}) => {
    const [editable, setEditable] = useState(false);

    return (
        <div>
            <div className={s.profileHeader}>
                <h3 className={s.profileInfo}>My profile info: </h3>
                {
                    isOwner && !editable &&
                    <img className={s.profileBtnIcon} src={edit} alt="edit" onClick={() => setEditable(true)}/>
                }
            </div>

            {
                editable
                    ? <ProfileForm userId={state.userId} setEditable={setEditable} />
                    : <>
                        <div className={s.contentItem}>
                <span className={s.spanItem}>
                    Name:
                    <span className={s.spanText}>{state.fullName ? state.fullName : 'no info 😕'}</span>
                </span>
                        </div>
                        <div className={s.contentItem}>
                <span className={s.spanItem}>
                    About me:
                    <span className={s.spanText}>{state.aboutMe ? state.aboutMe : 'no info 😕'}</span>
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
                                                {item[0]}: <span
                                                className={s.listElementSpan}>{item[1] ? item[1] : 'no info 😕'}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </>
            }


        </div>
    );
};

export default ProfileInfo;
