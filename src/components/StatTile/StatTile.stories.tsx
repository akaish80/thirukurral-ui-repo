import type { Meta, StoryObj } from '@storybook/react';
import { StatTile } from './StatTile';

const meta: Meta<typeof StatTile> = {
  title: 'Components/StatTile',
  component: StatTile,
  args: {
    value: '1330',
    label: 'திருக்குறள்கள்'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof StatTile>;

export const Default: Story = {};

export const Letters: Story = {
  args: {
    value: '247',
    label: 'எழுத்துக்கள் (Letters)'
  }
};
