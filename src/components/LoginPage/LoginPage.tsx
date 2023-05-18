import React from 'react';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Input, maxLength, minLength, required} from '../common/FormControls/FormControls';
import {useDispatch, useSelector} from 'react-redux';
import {loginTC} from '../../redux/reducers/auth/authReducer';
import {Redirect} from 'react-router-dom';
import {useAppSelector} from '../../redux/reduxStore';
import {Button} from '../common/Button/Button';
import {getCaptcha, getIsAuth} from '../../redux/reducers/auth/auth.selectors';

import s from './LoginPage.module.css'

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string
}

const maxLength30 = maxLength(30);
const minLength2 = minLength(2)
const minLength3 = minLength(3)

let LoginForm = (props: InjectedFormProps<FormDataType>) => {
    const captcha = useAppSelector(getCaptcha)
    const {handleSubmit} = props;
    console.log(captcha)
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
            {
                captcha && <img src={captcha} alt="captcha" style={{width: '175px'}}/>
            }
            {
                captcha &&
                <div>
                    <Field
                        name="captcha"
                        component={Input}
                        type="text"
                        label="Captcha"
                        className={s.input}
                        validate={[required]}
                    />
                </div>
            }
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
    const isAuth = useSelector(getIsAuth);

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData.login, formData.password, formData.rememberMe, formData.captcha))
    }

    if (isAuth) {
        return <Redirect to="/"/>
    }

    return (
        <div className={s.wrapper}>
            <h2>Login</h2>
            <LoginReduxForm onSubmit={onSubmit}/>

            <div style={{paddingTop: '50px', maxWidth: '230px'}}>
                <p>To log in get registered
                    <a href={'https://social-network.samuraijs.com/'}
                       target={'_blank'}
                       style={{color: '#F51A51'}}
                    > here
                    </a>
                </p>
                <p>or use common test account credentials:</p>
                <p>Email: free@samuraijs.com</p>
                <p>Password: free</p>
            </div>
        </div>
    );
};

export default LoginPage;
