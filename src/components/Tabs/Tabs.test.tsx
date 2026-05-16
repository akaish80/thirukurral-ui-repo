import { render, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs', () => {
  it('marks selected tab using aria-selected', () => {
    render(
      <Tabs
        value="path"
        onChange={() => undefined}
        items={[
          { key: 'path', label: 'Path' },
          { key: 'badges', label: 'Badges' }
        ]}
      />
    );

    expect(screen.getByRole('tab', { name: 'Path' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Badges' })).toHaveAttribute('aria-selected', 'false');
  });
});
