'use client';

import { Proposal } from '../lib/types';
import { calculateTimeRemaining, formatAddress } from '../lib/utils';
import { Clock, Users, TrendingUp } from 'lucide-react';

interface ProposalItemProps {
  proposal: Proposal;
  variant?: 'default' | 'detailed';
  onVote?: (proposalId: string, vote: 'yes' | 'no') => void;
}

export function ProposalItem({ proposal, variant = 'default', onVote }: ProposalItemProps) {
  const totalVotes = proposal.yesVotes + proposal.noVotes;
  const yesPercentage = totalVotes > 0 ? (proposal.yesVotes / totalVotes) * 100 : 0;
  const timeRemaining = calculateTimeRemaining(proposal.voteEndTime);

  return (
    <div className="card space-y-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs font-medium rounded">
              {proposal.type.toUpperCase()}
            </span>
            <span className="text-text-secondary text-sm">
              by {formatAddress(proposal.proposerWalletAddress)}
            </span>
          </div>
          <h3 className="font-semibold text-text-primary mb-1">{proposal.description}</h3>
          <p className="text-sm text-text-secondary">{proposal.proposedAction}</p>
        </div>
      </div>

      {/* Voting Progress */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text-secondary">Voting Progress</span>
          <span className="text-text-primary">{totalVotes} votes</span>
        </div>
        <div className="w-full bg-gray-800 rounded-full h-2">
          <div 
            className="bg-green-400 h-2 rounded-full transition-all duration-300"
            style={{ width: `${yesPercentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-text-secondary">
          <span>Yes: {proposal.yesVotes} ({yesPercentage.toFixed(1)}%)</span>
          <span>No: {proposal.noVotes}</span>
        </div>
      </div>

      {/* Time and Status */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 text-sm text-text-secondary">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{timeRemaining}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>Quorum: {proposal.quorum}%</span>
          </div>
        </div>
        <div className={`px-2 py-1 rounded text-xs font-medium ${
          proposal.status === 'active' ? 'bg-green-400/20 text-green-400' :
          proposal.status === 'passed' ? 'bg-blue-400/20 text-blue-400' :
          proposal.status === 'failed' ? 'bg-red-400/20 text-red-400' :
          'bg-gray-400/20 text-gray-400'
        }`}>
          {proposal.status.toUpperCase()}
        </div>
      </div>

      {/* Vote Buttons */}
      {proposal.status === 'active' && onVote && (
        <div className="flex gap-2 pt-2 border-t border-gray-800">
          <button 
            onClick={() => onVote(proposal.proposalId, 'yes')}
            className="flex-1 bg-green-400/20 text-green-400 px-4 py-2 rounded font-medium hover:bg-green-400/30 transition-colors duration-200"
          >
            Vote Yes
          </button>
          <button 
            onClick={() => onVote(proposal.proposalId, 'no')}
            className="flex-1 bg-red-400/20 text-red-400 px-4 py-2 rounded font-medium hover:bg-red-400/30 transition-colors duration-200"
          >
            Vote No
          </button>
        </div>
      )}
    </div>
  );
}
