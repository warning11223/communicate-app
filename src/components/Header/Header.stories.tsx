import {ComponentMeta, ComponentStory} from '@storybook/react';
import {InitialAuthStateType} from '../../redux/reducers/auth/authReducer';
import {Header} from './Header';


export default {
    title: 'Components/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const state: InitialAuthStateType = {
    id: 1,
    login: 'test',
    email: 'test@mail.ru',
    isAuth: false,
    loading: 'idle',
    error: ''
}

const Template: ComponentStory<typeof Header> = () => <Header authData={state}  />;

export const HeaderStory = Template.bind({})
