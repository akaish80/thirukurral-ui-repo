import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import './PageHeader.css';

export interface PageHeaderProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: ReactNode;
  heading: ReactNode;
  headingTamil?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
}

export function PageHeader({
  className,
  eyebrow,
  heading,
  headingTamil,
  subtitle,
  actions,
  ...props
}: PageHeaderProps) {
  return (
    <header className={clsx('ds-page-header', className)} {...props}>
      {eyebrow ? <span className="ds-page-header__eyebrow">{eyebrow}</span> : null}
      <h1 className="ds-page-header__title">
        {headingTamil ? <span className="ds-page-header__title-tamil">{headingTamil}</span> : null}
        <span>{heading}</span>
      </h1>
      {subtitle ? <p className="ds-page-header__subtitle">{subtitle}</p> : null}
      {actions ? <div className="ds-page-header__actions">{actions}</div> : null}
    </header>
  );
}
