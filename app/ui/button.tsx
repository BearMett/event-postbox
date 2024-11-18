'use client';

import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: 'purple' | 'pink';
  onClick?: () => void;
}

export function Button({ children, icon: Icon, variant = 'purple', onClick }: ButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full py-3 rounded-lg transition flex items-center justify-center text-white
        ${variant === 'purple' 
          ? 'bg-purple-500 hover:bg-purple-600' 
          : 'bg-pink-500 hover:bg-pink-600'}
      `}
    >
      {Icon && <Icon className="mr-2" />}
      {children}
    </button>
  );
} 