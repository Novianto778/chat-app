import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';
import Center from '../Center/Center';
import { action, actions } from '@storybook/addon-actions';

export default {
    title: 'form/Button',
    component: Button,
    decorators: [
        (Story) => (
            <Center>
                <Story />
            </Center>
        ),
    ],
    args: {
        children: 'Button',
    },
    argTypes: {
        variant: {
            control: {
                type: 'radio',
                options: ['primary', 'secondary'],
            },
        },
        // children: {
        //     defaultValue: 'Button',
        //     control: {
        //         type: 'text',
        //     },
        // },
        onClick: {
            action: 'clicked',
            control: {
                disable: true,
            },
        },
        // onClick: { action: 'clicked' },
    },
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
    <Button variant="primary" onClick={action('click handler')}>
        Button
    </Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
    <Button variant="secondary" {...actions('onClick', 'onMouseOver')}>
        Button
    </Button>
);

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});
PrimaryA.storyName = 'Primary Button';
PrimaryA.args = {
    variant: 'primary',
    children: 'Button',
};

export const ExtendedPrimaryA = Template.bind({});
ExtendedPrimaryA.args = {
    ...PrimaryA.args,
    children: 'Extended Button',
};

export const SecondaryA = Template.bind({});
SecondaryA.args = {
    variant: 'secondary',
    children: 'Button',
};

export const Log = Template.bind({});
Log.args = {
    variant: 'primary',
    children: 'Log',
    onClick: () => console.log('Log'),
};

export const ToggleButton = Template.bind({});
ToggleButton.args = {
    variant: 'primary',
    // children: 'Toggle',
    onClick: () => console.log('Toggle'),
    isLoading: false,
};
