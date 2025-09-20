'use client';

import { CheckCircle, XCircle, Clock, Loader2 } from 'lucide-react';

interface TransactionStatusIndicatorProps {
  variant: 'pending' | 'success' | 'failed';
  message?: string;
  txHash?: string;
}

export function TransactionStatusIndicator({ 
  variant, 
  message, 
  txHash 
}: TransactionStatusIndicatorProps) {
  const getIcon = () => {
    switch (variant) {
      case 'pending':
        return <Loader2 className="w-5 h-5 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-5 h-5" />;
      case 'failed':
        return <XCircle className="w-5 h-5" />;
    }
  };

  const getStyles = () => {
    switch (variant) {
      case 'pending':
        return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'success':
        return 'bg-green-400/20 text-green-400 border-green-400/30';
      case 'failed':
        return 'bg-red-400/20 text-red-400 border-red-400/30';
    }
  };

  const getDefaultMessage = () => {
    switch (variant) {
      case 'pending':
        return 'Transaction pending...';
      case 'success':
        return 'Transaction successful!';
      case 'failed':
        return 'Transaction failed';
    }
  };

  return (
    <div className={`flex items-center gap-3 p-4 rounded-lg border ${getStyles()}`}>
      {getIcon()}
      <div className="flex-1">
        <p className="font-medium">{message || getDefaultMessage()}</p>
        {txHash && (
          <p className="text-sm opacity-80 mt-1">
            Tx: {txHash.slice(0, 10)}...{txHash.slice(-8)}
          </p>
        )}
      </div>
    </div>
  );
}
