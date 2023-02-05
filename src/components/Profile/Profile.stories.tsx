import {ComponentMeta, ComponentStory} from '@storybook/react';
import Profile from './Profile';
import {store} from '../../redux/state';


export default {
    title: 'Components/Profile',
    component: Profile,
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => <Profile {...args} />;

export const ProfileStory = Template.bind({})
ProfileStory.args = {
    store: store
}
