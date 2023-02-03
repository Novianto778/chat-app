import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from './Input';

export default {
    title: 'form/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

export const Small: ComponentStory<typeof Input> = () => (
    <Input sizes="small" placeholder="small input" />
);

export const Medium: ComponentStory<typeof Input> = () => (
    <Input sizes="medium" />
);

export const Large: ComponentStory<typeof Input> = () => (
    <Input sizes="large" />
);

Small.storyName = 'Small Input';
Medium.storyName = 'Medium Input';
Large.storyName = 'Large Input';
