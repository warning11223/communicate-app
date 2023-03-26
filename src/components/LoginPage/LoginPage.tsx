import React from 'react';

import s from './LoginPage.module.css'
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

let LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name="login" component="input" type="text" placeholder='Login' />
            </div>
            <div>
                <Field name="password" component="input" type="password" placeholder='Password' />
            </div>
            <div style={{display: 'flex', gap: 10}}>
                <label htmlFor="rememberMe">rememberMe</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
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
