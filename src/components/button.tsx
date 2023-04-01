import { cva, VariantProps } from 'class-variance-authority';
import React, { FC, PropsWithChildren, ButtonHTMLAttributes } from 'react';

const buttonClasses = cva(
  [
    'flex',
    'w-full',
    'justify-center',
    'text-sm',
    'rounded-md',
    'font-semibold',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'focus-visible:outline-indigo-600',
    'duration-200',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-sky-400',
          'bg-sky-600',
          'text-white',
          'shadow-sm',
          'border-transparent',
          'hover:bg-sky-600',
        ],
        ghost: [
          'bg-white',
          'text-black',
          'border-gray-400',
          'hover:bg-gray-100',
          'border-solid',
          'border-2',
          'border-gray-800',
        ],
        text: ['bg-transparent', 'text-black', 'hover:bg-gray-100'],
      },
      size: {
        small: ['text-md', 'py-1', 'px-2'],
        medium: ['text-lg', 'px-10', 'py-2'],
        large: ['text-xlg', 'px-8', 'py-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

export type ButtonProps = {
  isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonClasses>;

const Button: FC<ButtonProps> = ({
  children,
  className,
  intent,
  size,
  ...props
}) => {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
};

export default Button;
