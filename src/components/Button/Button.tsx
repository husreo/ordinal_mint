import React from 'react';

import clsxm from '@/lib/clsxm';

interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  disabled = false,
  onClick = () => void 1,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={clsxm(
        'bg-white/5 px-6 py-2 font-accent text-xl ',
        disabled ? 'text-white/40' : 'hover:bg-white/10',
        className
      )}
    >
      {children}
    </button>
  );
}
