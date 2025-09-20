'use client';

import { Shield, Menu, User } from 'lucide-react';
import { useState } from 'react';

interface AppShellProps {
  children: React.ReactNode;
  variant?: 'default' | 'miniplayer';
}

export function AppShell({ children, variant = 'default' }: AppShellProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="bg-surface border-b border-gray-800">
        <div className="max-w-screen-md mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Shield className="w-6 h-6 text-accent" />
              <span className="text-xl font-bold text-text-primary">DAO</span>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                Contribute
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                Explore Pools
              </a>
              <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                Trends
              </a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Decentralized Autonomous Organization
              </div>
              <button className="bg-accent text-black px-4 py-2 rounded-md font-medium hover:opacity-90 transition-opacity duration-200">
                MiniApp
              </button>
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-5 h-5 text-text-primary" />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-800">
              <nav className="flex flex-col gap-3">
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Contribute
                </a>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Explore Pools
                </a>
                <a href="#" className="text-text-secondary hover:text-text-primary transition-colors duration-200">
                  Trends
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-screen-md mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  );
}
