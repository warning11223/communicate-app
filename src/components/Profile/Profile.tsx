import React from 'react';

import s from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileStateType} from '../../redux/reducers/profileReducer';

import image from '../../img/user-avatar.png'
import Preloader from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';

type ProfileProps = {
    state: ProfileStateType
    setUserStatusThunk: (status: string) => void
}

const Profile: React.FC<ProfileProps> = ({state, setUserStatusThunk}) => {
    const onChangeHandler = (statusValue: string) => {
        setUserStatusThunk(statusValue);
    }

    return (
        <div className={s.main}>
            {state.isLoading
                ? <div style={{position: 'fixed', top: '10%', textAlign: 'center', width: '64.6%'}}>
                    <Preloader />
                  </div>
                : <div className={s.content}>
                    <div className={s.leftContent}>
                        <img className={s.avatar} src={state.photos.large ? state.photos.large : image} alt="avatar"/>

                        <MyPostsContainer/>

                    </div>
                    <div className={s.rightContent}>
                        <ProfileInfo state={state}/>
                        <ProfileStatus status={state.status} changeStatus={onChangeHandler}/>
                    </div>

                </div>
            }

        </div>
    );
};

export default Profile;
