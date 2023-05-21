import {ComponentMeta, ComponentStory} from '@storybook/react';
import Header from './Header';
import {InitialAuthStateType} from '../../redux/reducers/auth/authReducer';


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
