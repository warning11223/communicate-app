import {ComponentMeta, ComponentStory} from '@storybook/react';
import Dialogs from './Dialogs';
import {store} from '../../redux/state';


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
