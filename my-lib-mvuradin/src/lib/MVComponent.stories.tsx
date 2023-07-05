import { Meta, StoryObj } from '@storybook/react'
import { MVComponent } from '.';

const meta: Meta<typeof MVComponent> = {
    title: 'Design System/MVComponent',
    component: MVComponent,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof MVComponent>;

export const Default: Story = {
    args: {
        disabled: false,
        children: 'Hello MVcomponent',
        primary: false,
    },
};

export const Primary: Story = {
    args: {
        disabled: true,
        children: 'Hello MVcomponent',
        primary: true,
        background: '#4CAF50'
    },
};