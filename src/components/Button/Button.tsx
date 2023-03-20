import React from 'react';

import clsxm from '@/lib/clsxm';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  onClick = () => void 1,
  className,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={clsxm(
        'bg-white/5 px-6 py-2 font-accent text-xl hover:bg-white/10',
        className
      )}
    >
      {children}
    </button>
  );
}
