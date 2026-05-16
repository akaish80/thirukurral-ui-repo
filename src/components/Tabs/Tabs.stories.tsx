import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';

function LearningPathTabsDemo() {
  const [tab, setTab] = useState('path');

  return (
    <Tabs
      ariaLabel="Learning path tabs"
      value={tab}
      onChange={setTab}
      items={[
        { key: 'path', label: 'Path', subLabel: 'Steps' },
        { key: 'badges', label: 'Badges', subLabel: 'Achievements' },
        { key: 'planner', label: 'Planner', subLabel: '30 days' }
      ]}
    />
  );
}

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const LearningPathTabs: Story = {
  render: () => <LearningPathTabsDemo />
};
