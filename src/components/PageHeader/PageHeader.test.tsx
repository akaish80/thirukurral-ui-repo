import { render, screen } from '@testing-library/react';
import { PageHeader } from './PageHeader';

describe('PageHeader', () => {
  it('renders tamil and english titles', () => {
    render(<PageHeader headingTamil="திருக்குறள்" heading="Explorer" />);

    expect(screen.getByText('திருக்குறள்')).toBeInTheDocument();
    expect(screen.getByText('Explorer')).toBeInTheDocument();
  });
});
