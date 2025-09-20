'use client';

import { Check, X } from 'lucide-react';

interface VoteButtonProps {
  variant: 'yes' | 'no';
  onClick?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

export function VoteButton({ variant, onClick, disabled = false, children }: VoteButtonProps) {
  const isYes = variant === 'yes';
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        flex items-center justify-center gap-2 px-4 py-2 rounded font-medium
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        ${isYes 
          ? 'bg-green-400/20 text-green-400 hover:bg-green-400/30' 
          : 'bg-red-400/20 text-red-400 hover:bg-red-400/30'
        }
      `}
    >
      {isYes ? <Check className="w-4 h-4" /> : <X className="w-4 h-4" />}
      {children || (isYes ? 'Vote Yes' : 'Vote No')}
    </button>
  );
}
