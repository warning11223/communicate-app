import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Post} from './Post';


export default {
    title: 'Components/Post',
    component: Post,
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const PostStory = Template.bind({})
PostStory.args = {
    text: 'hello story',
}
