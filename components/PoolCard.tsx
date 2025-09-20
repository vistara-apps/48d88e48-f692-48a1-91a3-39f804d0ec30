'use client';

import { Pool } from '../lib/types';
import { formatCurrency, formatPercentage } from '../lib/utils';
import { TrendingUp, TrendingDown, Users } from 'lucide-react';

interface PoolCardProps {
  pool: Pool & { avatar?: string; apy?: number; risk?: 'low' | 'medium' | 'high' };
  variant?: 'default';
  onClick?: () => void;
}

export function PoolCard({ pool, variant = 'default', onClick }: PoolCardProps) {
  const getRiskColor = (risk?: string) => {
    switch (risk) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-text-secondary';
    }
  };

  const getRiskBg = (risk?: string) => {
    switch (risk) {
      case 'low': return 'bg-green-400/10';
      case 'medium': return 'bg-yellow-400/10';
      case 'high': return 'bg-red-400/10';
      default: return 'bg-surface';
    }
  };

  return (
    <div 
      className="card-interactive animate-fade-in"
      onClick={onClick}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-lg">
            {pool.avatar || '💎'}
          </div>
          <div>
            <h3 className="font-semibold text-text-primary">{pool.name}</h3>
            <p className="text-sm text-text-secondary">{pool.description}</p>
          </div>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${getRiskBg(pool.risk)} ${getRiskColor(pool.risk)}`}>
          {pool.risk?.toUpperCase() || 'ACTIVE'}
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-text-secondary text-sm">Pool Balance</span>
          <span className="font-semibold text-text-primary">
            {formatCurrency(pool.currentBalance)}
          </span>
        </div>
        
        {pool.apy && (
          <div className="flex items-center justify-between">
            <span className="text-text-secondary text-sm">APY</span>
            <div className="flex items-center gap-1">
              {pool.apy > 10 ? (
                <TrendingUp className="w-3 h-3 text-green-400" />
              ) : (
                <TrendingDown className="w-3 h-3 text-yellow-400" />
              )}
              <span className="font-semibold text-green-400">
                {formatPercentage(pool.apy)}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex gap-2 mt-4 pt-4 border-t border-gray-800">
        <button className="flex-1 bg-primary/20 text-primary px-3 py-2 rounded text-sm font-medium hover:bg-primary/30 transition-colors duration-200">
          Join
        </button>
        <button className="flex-1 bg-surface text-text-primary px-3 py-2 rounded text-sm font-medium hover:bg-gray-700 transition-colors duration-200">
          View
        </button>
      </div>
    </div>
  );
}
