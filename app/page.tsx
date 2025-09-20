import { AppShell } from '../components/AppShell';
import { PoolGrid } from '../components/PoolGrid';
import { PerformanceChart } from '../components/PerformanceChart';

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        {/* Header Section */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">
            Smart Contract Protection
          </h1>
          <p className="text-text-secondary">
            Pool crypto, trade smarter, share profits together
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button className="btn-primary">
            Contribute
          </button>
          <button className="btn-secondary">
            Trade
          </button>
          <button className="btn-secondary">
            Monitor
          </button>
        </div>

        {/* Pool Grid */}
        <PoolGrid />

        {/* Performance Chart */}
        <PerformanceChart />
      </div>
    </AppShell>
  );
}
