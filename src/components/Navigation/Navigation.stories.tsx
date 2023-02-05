import {ComponentMeta, ComponentStory} from '@storybook/react';
import Navigation from './Navigation';


export default {
    title: 'Components/Navigation',
    component: Navigation,
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = () => <Navigation />;

export const NavigationStory = Template.bind({})

