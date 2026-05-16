import clsx from 'clsx';
import './LoadingSpinner.css';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  label?: string;
}

export function LoadingSpinner({ size = 'md', label = 'Loading' }: LoadingSpinnerProps) {
  return <span className={clsx('ds-loading-spinner', `ds-loading-spinner--${size}`)} aria-label={label} role="status" />;
}
