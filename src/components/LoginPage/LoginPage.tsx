import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

import s from './LoginPage.module.css'
import {Input, maxLength, minLength, required} from '../common/FormControls/FormControls';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../reducers/authReducer';
import {Redirect} from 'react-router-dom';
import {RootState} from '../../redux/reduxStore';
import {Button} from '../common/Button/Button';

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLength(30);
const minLength2 = minLength(2)
const minLength3 = minLength(3)

let LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const {handleSubmit} = props;

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <div>
                <Field
                    name="login"
                    component={Input}
                    type="text"
                    label="Login"
                    validate={[required, maxLength30, minLength2]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    component={Input}
                    type="password"
                    label="Password"
                    className={s.input}
                    validate={[required, maxLength30, minLength3]}
                />
            </div>
            <div style={{display: 'flex', gap: 10}}>
                <label htmlFor="rememberMe">Remember me</label>
                <Field name="rememberMe" component="input" type="checkbox"/>
            </div>
            <div>
                <Button>Submit</Button>
            </div>
            {
                props.error && <span style={{color: 'red'}}>{props.error}</span>
            }
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType, {}>({
    form: 'login'
})(LoginForm)

const LoginPage = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.authReducer.isAuth)

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.login, formData.password, formData.rememberMe))
    }

    if (isAuth) {
        return <Redirect to="/"/>
    }

    return (
        <div className={s.wrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default LoginPage;
