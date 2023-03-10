import {ComponentMeta, ComponentStory} from '@storybook/react';
import Header from './Header';


export default {
    title: 'Components/Header',
    component: Header,
} as ComponentMeta<typeof Header>;

const state = {
    id: 1,
    login: 'test',
    email: 'test@mail.ru',
    isAuth: false
}

const Template: ComponentStory<typeof Header> = () => <Header authData={state} />;

export const HeaderStory = Template.bind({})
