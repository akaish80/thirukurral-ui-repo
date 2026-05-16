import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import './FeatureTile.css';

export interface FeatureTileProps extends HTMLAttributes<HTMLElement> {
  icon?: ReactNode;
  heading: ReactNode;
  description: ReactNode;
  arrow?: ReactNode;
}

export function FeatureTile({
  icon,
  heading,
  description,
  arrow = '->',
  className,
  ...props
}: FeatureTileProps) {
  return (
    <article className={clsx('ds-feature-tile', className)} {...props}>
      {icon ? <span className="ds-feature-tile__icon">{icon}</span> : null}
      <h3 className="ds-feature-tile__title">{heading}</h3>
      <p className="ds-feature-tile__description">{description}</p>
      <span className="ds-feature-tile__arrow">{arrow}</span>
    </article>
  );
}
