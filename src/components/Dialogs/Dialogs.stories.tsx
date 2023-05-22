import {ComponentMeta, ComponentStory} from '@storybook/react';
import {store} from '../../redux/state';
import {Dialogs} from './Dialogs';


export default {
    title: 'Components/Dialogs',
    component: Dialogs,
} as ComponentMeta<typeof Dialogs>;

const Template: ComponentStory<typeof Dialogs> = (args) => <Dialogs {...args} />;

export const DialogsStory = Template.bind({})
DialogsStory.args = {
    dialogs: store.getState().dialogsPage.dialogs,
    messages: store.getState().dialogsPage.messages
}
