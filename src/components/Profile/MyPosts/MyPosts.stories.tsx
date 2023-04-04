import {ComponentMeta, ComponentStory} from '@storybook/react';
import MyPosts from './MyPosts';
import {store} from '../../../redux/state';


export default {
    title: 'Components/My Posts',
    component: MyPosts,
} as ComponentMeta<typeof MyPosts>;

const Template: ComponentStory<typeof MyPosts> = (args) => <MyPosts {...args} />;

export const MyPostsStory = Template.bind({})
MyPostsStory.args = {
    textarea: 'Hello world',
    posts: [
        {id: 1, text: 'post1'},
        {id: 2, text: 'post2'},
        {id: 3, text: 'post3'},
        {id: 4, text: 'post4'},
        {id: 5, text: 'post5'},
        {id: 6, text: 'post6'},
    ],
    addPostHandler(){

    },
}
