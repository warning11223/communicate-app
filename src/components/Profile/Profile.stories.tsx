import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Profile} from './Profile';



export default {
    title: 'Components/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const ProfileStory = Template.bind({})
ProfileStory.args = {

}
