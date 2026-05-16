import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  args: {
    heading: 'Quarterly Update',
    children: 'Revenue increased by 18% while customer churn fell by 2.3%.'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const Interactive: Story = {
  args: {
    interactive: true
  }
};
