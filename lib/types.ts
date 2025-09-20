export interface DAO {
  daoId: string;
  name: string;
  description: string;
  createdAt: Date;
  governanceTokenAddress: string;
}

export interface Member {
  memberId: string;
  daoId: string;
  walletAddress: string;
  joinedAt: Date;
  stakeAmount: number;
}

export interface Pool {
  poolId: string;
  daoId: string;
  name: string;
  description: string;
  createdAt: Date;
  assetAddress: string;
  currentBalance: number;
  status: 'active' | 'inactive' | 'pending';
  apy?: number;
  risk?: 'low' | 'medium' | 'high';
}

export interface Proposal {
  proposalId: string;
  daoId: string;
  proposerWalletAddress: string;
  type: 'investment' | 'governance' | 'parameter';
  description: string;
  proposedAction: string;
  voteStartTime: Date;
  voteEndTime: Date;
  quorum: number;
  supportRequired: number;
  status: 'active' | 'passed' | 'failed' | 'executed';
  yesVotes: number;
  noVotes: number;
}

export interface Investment {
  investmentId: string;
  poolId: string;
  proposalId: string;
  executedAt: Date;
  amountInvested: number;
  outcome: 'pending' | 'profit' | 'loss';
  profit: number;
}

export interface Distribution {
  distributionId: string;
  poolId: string;
  investmentId: string;
  distributedAt: Date;
  amountPerMember: number;
  memberWalletAddress: string;
}

export interface ChartDataPoint {
  time: string;
  value: number;
}
