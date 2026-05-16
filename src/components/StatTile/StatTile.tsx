import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import './StatTile.css';

export interface StatTileProps extends HTMLAttributes<HTMLElement> {
  value: ReactNode;
  label: ReactNode;
}

export function StatTile({ value, label, className, ...props }: StatTileProps) {
  return (
    <article className={clsx('ds-stat-tile', className)} {...props}>
      <span className="ds-stat-tile__value">{value}</span>
      <span className="ds-stat-tile__label">{label}</span>
    </article>
  );
}
