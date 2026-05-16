import type { Meta, StoryObj } from '@storybook/react';
import { PageHeader } from './PageHeader';
import { Button } from '../Button';

const meta: Meta<typeof PageHeader> = {
  title: 'Components/PageHeader',
  component: PageHeader,
  args: {
    eyebrow: 'Thirukkural',
    headingTamil: 'திருக்குறள்',
    heading: 'Thirukkural Explorer',
    subtitle: 'Browse all 1330 couplets, filter by Paal and Adikaram, and continue your learning streak.'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    actions: (
      <>
        <Button>Start Learning</Button>
        <Button variant="secondary">Open Planner</Button>
      </>
    )
  }
};
