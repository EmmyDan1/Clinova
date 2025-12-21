import React from 'react'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hover = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={` rounded-xl shadow-lg border border-gray-100 p-6 transition-all duration-300 ${
          hover ? 'hover:shadow-xl hover:-translate-y-1' : ''
        } ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';

export { Card };
