import type { Meta, StoryObj } from '@storybook/react';
import { FeatureTile } from './FeatureTile';

const meta: Meta<typeof FeatureTile> = {
  title: 'Components/FeatureTile',
  component: FeatureTile,
  args: {
    icon: '📖',
    heading: 'Explore Kurrals',
    description: 'Browse all 1330 Thirukkural couplets organized by Paal and Adikaram.'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FeatureTile>;

export const Default: Story = {};
