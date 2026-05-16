import { render, screen } from '@testing-library/react';
import { LoadingSpinner } from './LoadingSpinner';

describe('LoadingSpinner', () => {
  it('exposes status role for accessibility', () => {
    render(<LoadingSpinner label="Loading route" />);

    expect(screen.getByRole('status', { name: 'Loading route' })).toBeInTheDocument();
  });
});
