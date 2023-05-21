import React, {ChangeEvent} from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileStateType} from '../../redux/reducers/profile/profileReducer';
import Preloader from '../common/Preloader/Preloader';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import ProfileStatus from './ProfileStatus/ProfileStatus';

import s from './Profile.module.css'
import image from '../../assets/img/user-avatar.png'
import upload from '../../assets/img/up-loading.png'
import {toast} from 'react-toastify';

type ProfileProps = {
    state: ProfileStateType
    setUserStatusThunk: (status: string) => void
    setPhotoThunk: (photo: File) => void
    isOwner: boolean
    error: string
    usersError: string
}

const Profile: React.FC<ProfileProps> = ({state, setUserStatusThunk, setPhotoThunk, isOwner, error, usersError}) => {
    const onChangeHandler = (statusValue: string) => {
        setUserStatusThunk(statusValue);
    }

    const onLoadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setPhotoThunk(e.currentTarget.files![0])
    }

    if (error || usersError) {
        if (error) toast.error(error)
        if (usersError) toast.error(usersError)
    }

    return (
        <div className={s.main}>
            {state.isLoading
                ? <div style={{position: 'fixed', top: '10%', textAlign: 'center', width: '64.6%'}}>
                    <Preloader/>
                </div>
                : <div className={s.content}>
                    <div className={s.leftContent}>
                        <img className={s.avatar} src={state.photos.large ? state.photos.large : image} alt="avatar"/>
                        <ProfileStatus status={state.status} changeStatus={onChangeHandler}/>
                        {
                            isOwner &&
                            <div className={s.uploadContainer}>
                                <input type="file" onChange={onLoadHandler} className={s.upload}/>
                                <img src={upload} alt="upload" className={s.uploadIcon}/>
                            </div>
                        }


                        <MyPostsContainer/>
                    </div>
                    <div className={s.rightContent}>
                        <ProfileInfo state={state} isOwner={isOwner}/>
                    </div>

                </div>
            }

        </div>
    );
};

export default Profile;
