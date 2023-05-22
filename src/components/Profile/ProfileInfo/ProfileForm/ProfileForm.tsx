import { useForm, SubmitHandler } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";

import s from './ProfileForm.module.css'
import {Button} from '../../../common';
import {useAppDispatch} from '../../../../redux';
import {setProfileThunk} from '../../../../redux';
import React from 'react';

const URL = /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/;

const schema = yup.object({
    name: yup.string().required(),
    aboutMe: yup.string().required(),
    lookingForAJobDescription: yup.string().required(),
    lookingForAJob: yup.boolean().required(),
    facebook: yup.string().matches( URL, 'Enter correct facebook url!').required('Please enter facebook url'),
    website: yup.string().matches( URL, 'Enter correct website url!').required('Please enter website url'),
    vk: yup.string().matches( URL, 'Enter correct vk url!').required('Please enter vk url'),
    twitter: yup.string().matches( URL, 'Enter correct twitter url!').required('Please enter twitter url'),
    instagram: yup.string().matches( URL, 'Enter correct instagram url!').required('Please enter instagram url'),
    youtube: yup.string().matches( URL, 'Enter correct youtube url!').required('Please enter youtube url'),
    github: yup.string().matches( URL, 'Enter correct github url!').required('Please enter github url'),
    mainLink: yup.string().matches( URL, 'Enter correct mainLink url!').required('Please enter mainLink url'),
}).required();

export const ProfileForm: React.FC<Props> = ({ userId, setEditable }) => {
    const dispatch = useAppDispatch();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>({
        // @ts-ignore
        resolver: yupResolver(schema)
    });


    const onSubmit: SubmitHandler<Inputs> = data => {
        // @ts-ignore
        dispatch(setProfileThunk({
            lookingForAJob: data.lookingForAJob,
            fullName: data.name,
            userId: +userId,
            aboutMe: data.aboutMe,
            lookingForAJobDescription: data.lookingForAJobDescription,
            contacts: {
                youtube: data.youtube,
                vk: data.vk,
                website: data.website,
                twitter: data.twitter,
                mainLink: data.mainLink,
                github: data.github,
                instagram: data.instagram,
                facebook: data.facebook
            }
        }, String(userId)))

        setEditable(false)
    };



    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder={'Name...'} className={s.input} {...register("name")} /> <br/>
            <p className={s.text}>{errors.name?.message}</p>

            <input placeholder={'About me...'} className={s.input} {...register("aboutMe")}  /> <br/>
            <p className={s.text}>{errors.aboutMe?.message}</p>

            <input placeholder={'Looking for a job description...'} className={s.input} {...register("lookingForAJobDescription", {})} /> <br/>
            <p className={s.text}>{errors.lookingForAJobDescription?.message}</p>

            <input placeholder={'Facebook...'} className={s.input} {...register("facebook", {})} /> <br/>
            <p className={s.text}>{errors.facebook?.message}</p>

            <input placeholder={'Website...'} className={s.input} {...register("website", {})} /> <br/>
            <p className={s.text}>{errors.website?.message}</p>

            <input placeholder={'Vk...'} className={s.input} {...register("vk", {})} /> <br/>
            <p className={s.text}>{errors.vk?.message}</p>

            <input placeholder={'Instagram...'} className={s.input} {...register("instagram", {})} /> <br/>
            <p className={s.text}>{errors.instagram?.message}</p>

            <input placeholder={'Youtube...'} className={s.input} {...register("youtube", {})} /> <br/>
            <p className={s.text}>{errors.youtube?.message}</p>

            <input placeholder={'Github...'} className={s.input} {...register("github", {})} /> <br/>
            <p className={s.text}>{errors.github?.message}</p>

            <input placeholder={'Twitter...'} className={s.input} {...register("twitter", {})} /> <br/>
            <p className={s.text}>{errors.twitter?.message}</p>

            <input placeholder={'MainLink...'} className={s.input} {...register("mainLink", {})} /> <br/>
            <p className={s.text}>{errors.mainLink?.message}</p>

            <span>Looking for a job: </span>
            <input {...register("lookingForAJob", {})} className={s.checked} type={'checkbox'}  /> <br/>
            <p className={s.text}>{errors.lookingForAJob?.message}</p>

            <Button type={'submit'}>Send</Button>
        </form>
    );
}

type Props = {
    userId: number | string
    setEditable: (value: boolean) => void
}

type Inputs = {
    name: string
    aboutMe: string
    lookingForAJob: boolean
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
    lookingForAJobDescription: string
};

type FormData = yup.InferType<typeof schema>;

