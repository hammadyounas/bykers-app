import React from 'react';

const Card = ({
  children,
  title,
  subtitle,
  headerslot,
  className = 'custom-class  bg-white ',
  bodyClass = 'p-6',
  noborder,
  titleClass = 'custom-class ',
}: {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  headerslot?: React.ReactNode;
  className?: string;
  bodyClass?: string;
  noborder?: boolean;
  titleClass?: string;
}) => {
  return (
    <div
      className={`
   
    ${className}
        `}
    >
      {(title || subtitle) && (
        <header className={`card-header ${noborder ? 'no-border' : ''}`}>
          <div>
            {title && <div className={`card-title ${titleClass}`}>{title}</div>}
            {subtitle && <div className="card-subtitle">{subtitle}</div>}
          </div>
          {headerslot && <div className="card-header-slot">{headerslot}</div>}
        </header>
      )}
      <main className={`card-body ${bodyClass}`}>{children}</main>
    </div>
  );
};

export default Card;
