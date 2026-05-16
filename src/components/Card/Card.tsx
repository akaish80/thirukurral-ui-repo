import { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';
import './Card.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  heading?: ReactNode;
  interactive?: boolean;
}

export function Card({ heading, interactive = false, className, children, ...props }: CardProps) {
  return (
    <section className={clsx('ds-card', { 'ds-card--interactive': interactive }, className)} {...props}>
      {heading ? <h3 className="ds-card__title">{heading}</h3> : null}
      <div className="ds-card__content">{children}</div>
    </section>
  );
}
