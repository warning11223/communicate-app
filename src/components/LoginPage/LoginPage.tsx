import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import s from './LoginPage.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

let LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div>
                <Field
                    name="login"
                    component="input"
                    type="text"
                    placeholder='Login'
                    className={s.input}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component="input"
                    type="password"
                    placeholder='Password'
                    className={s.input}
                />
            </div>
            <div style={{display: 'flex', gap: 10}}>
                <label htmlFor="rememberMe">Remember me</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>

            <div>
                <div className={s.wrapper}>
                    <button className={s.button} type="submit">
                        Submit
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, {}>({
    form: 'login'
})(LoginForm)

const LoginPage = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData);
    }

    return (
        <div className={s.wrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default LoginPage;
