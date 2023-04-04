import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import s from './LoginPage.module.css'
import {Input, maxLength, minLength, required} from '../common/FormControls/FormControls';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength15 = maxLength(15);
const minLength2 = minLength(2)
const minLength6 = minLength(6)

let LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div>
                <Field
                    name="login"
                    component={Input}
                    type="text"
                    label='Login'
                    validate={[required, maxLength15, minLength2]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={Input}
                    type="password"
                    label='Password'
                    className={s.input}
                    validate={[required, maxLength15, minLength6]}
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
