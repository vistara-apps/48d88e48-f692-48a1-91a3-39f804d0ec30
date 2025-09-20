'use client';

import { PoolCard } from './PoolCard';
import { MOCK_POOLS } from '../lib/constants';

export function PoolGrid() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-text-primary">Active Pools</h2>
        <button className="text-primary hover:text-primary/80 transition-colors duration-200 text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {MOCK_POOLS.slice(0, 5).map((pool) => (
          <PoolCard 
            key={pool.poolId} 
            pool={pool}
            onClick={() => console.log('Pool clicked:', pool.name)}
          />
        ))}
      </div>
    </div>
  );
}
