import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Primary } from '../Button/Button.stories';
import { Large } from '../Input/Input.stories';
import Subscription from './Subscription';

export default {
    title: 'form/Subscription',
    component: Subscription,
} as ComponentMeta<typeof Subscription>;

const Template: ComponentStory<typeof Subscription> = (args) => (
    <Subscription {...args} />
);
export const PrimarySubscription = Template.bind({});
PrimarySubscription.args = {
    ...Primary.args,
    ...Large.args,
};
