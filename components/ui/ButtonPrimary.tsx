import React from 'react';

interface ButtonPrimaryProps<T extends React.ElementType = 'button'> {
  as?: T;
  children: React.ReactNode;
  className?: string;
}

const ButtonPrimary = <T extends React.ElementType = 'button'>({
  as,
  children,
  className,
  ...props
}: ButtonPrimaryProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonPrimaryProps<T>>) => {
  const Component = as || 'button';
  return (
    <Component
      className={`inline-flex items-center gap-x-2 py-2 px-4 bg-gradient-to-r from-primary to-fuchsia-700 font-medium text-sm text-white rounded-full focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default ButtonPrimary;