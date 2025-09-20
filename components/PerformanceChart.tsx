'use client';

import { MOCK_CHART_DATA } from '../lib/constants';
import { TrendingUp } from 'lucide-react';

export function PerformanceChart() {
  const maxValue = Math.max(...MOCK_CHART_DATA.map(d => d.value));
  const minValue = Math.min(...MOCK_CHART_DATA.map(d => d.value));
  const range = maxValue - minValue;

  return (
    <div className="card space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-text-primary">Pool Performance</h2>
          <p className="text-text-secondary text-sm">Total pool resources over time</p>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+24.5%</span>
        </div>
      </div>

      {/* Chart Container */}
      <div className="relative h-48 bg-bg rounded-lg p-4">
        <svg className="w-full h-full" viewBox="0 0 400 160">
          {/* Grid Lines */}
          <defs>
            <pattern id="grid" width="40" height="32" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 32" fill="none" stroke="hsl(210 15% 20%)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />

          {/* Chart Line */}
          <path
            d={MOCK_CHART_DATA.map((point, index) => {
              const x = (index / (MOCK_CHART_DATA.length - 1)) * 360 + 20;
              const y = 140 - ((point.value - minValue) / range) * 120;
              return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
            }).join(' ')}
            fill="none"
            stroke="hsl(30 90% 55%)"
            strokeWidth="2"
            className="drop-shadow-sm"
          />

          {/* Data Points */}
          {MOCK_CHART_DATA.map((point, index) => {
            const x = (index / (MOCK_CHART_DATA.length - 1)) * 360 + 20;
            const y = 140 - ((point.value - minValue) / range) * 120;
            return (
              <circle
                key={index}
                cx={x}
                cy={y}
                r="3"
                fill="hsl(30 90% 55%)"
                className="drop-shadow-sm"
              />
            );
          })}
        </svg>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-text-secondary py-4">
          <span>{maxValue.toFixed(1)}</span>
          <span>{((maxValue + minValue) / 2).toFixed(1)}</span>
          <span>{minValue.toFixed(1)}</span>
        </div>

        {/* X-axis labels */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between text-xs text-text-secondary px-4">
          <span>14d</span>
          <span>7d</span>
          <span>Today</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-800">
        <div className="text-center">
          <div className="text-lg font-semibold text-text-primary">4.3 ETH</div>
          <div className="text-xs text-text-secondary">Current Value</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-green-400">+24.5%</div>
          <div className="text-xs text-text-secondary">14d Change</div>
        </div>
        <div className="text-center">
          <div className="text-lg font-semibold text-text-primary">12</div>
          <div className="text-xs text-text-secondary">Active Pools</div>
        </div>
      </div>
    </div>
  );
}
