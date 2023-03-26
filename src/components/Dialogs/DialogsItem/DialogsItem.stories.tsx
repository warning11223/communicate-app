import {ComponentMeta, ComponentStory} from '@storybook/react';
import DialogsItem from './DialogsItem';
import {MemoryRouter} from 'react-router-dom';


export default {
    title: 'Components/DialogsItem',
    component: DialogsItem,
} as ComponentMeta<typeof DialogsItem>;

const Template: ComponentStory<typeof DialogsItem> = (args) => <DialogsItem {...args} />;

export const DialogsItemStory = Template.bind({})
DialogsItemStory.args = {
    name: 'Dialog1',
    number: 1,
}
