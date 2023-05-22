import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Message} from './Message';

export default {
    title: 'Components/Message',
    component: Message,
} as ComponentMeta<typeof Message>;

const Template: ComponentStory<typeof Message> = (args) => <Message {...args} />;

export const MessageStory = Template.bind({})
MessageStory.args = {
    name: 'Message test',
}
