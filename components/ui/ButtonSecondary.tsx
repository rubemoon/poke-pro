import React from 'react';

interface ButtonSecondaryProps<T extends React.ElementType = 'button'> {
  as?: T;
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary = <T extends React.ElementType = 'button'>({
  as,
  children,
  className,
  ...props
}: ButtonSecondaryProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonSecondaryProps<T>>) => {
  const Component = as || 'button';
  return (
    <Component
      className={`inline-flex items-center gap-x-2 py-2 px-4 bg-gray-200 text-gray-800 rounded-full focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ButtonSecondary;