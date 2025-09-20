# DAOpool - Base MiniApp

Pool crypto, trade smarter, share profits together.

## Overview

DAOpool is a Base MiniApp that enables users to pool their crypto assets, collectively make investment decisions, and automatically distribute profits through smart contracts and on-chain governance.

## Features

- **Secure Collective Wallets**: Smart contract-based wallets for pooled funds
- **Automated Investment Execution**: Community-driven investment strategies
- **Profit Distribution Logic**: Automated fair distribution of earnings
- **On-Chain Governance Framework**: Transparent voting and proposal system

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Base wallet for testing

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd daopool-miniapp
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your OnchainKit API key to `.env.local`:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_api_key_here
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet Integration**: MiniKit + OnchainKit
- **Styling**: Tailwind CSS
- **Language**: TypeScript

### Key Components

- `AppShell`: Main application layout and navigation
- `PoolCard`: Individual pool display with stats and actions
- `PoolGrid`: Grid layout for multiple pools
- `PerformanceChart`: Visual representation of pool performance
- `ProposalItem`: Governance proposal display and voting
- `VoteButton`: Voting interface components
- `TransactionStatusIndicator`: Transaction status feedback

### Data Model

The app uses a comprehensive data model including:
- DAO entities with governance tokens
- Member management with stake tracking
- Pool management with asset tracking
- Proposal system with voting mechanics
- Investment tracking and profit distribution

## Development

### Project Structure

```
app/
├── layout.tsx          # Root layout with providers
├── page.tsx           # Main dashboard page
├── providers.tsx      # MiniKit and OnchainKit providers
├── globals.css        # Global styles and Tailwind
└── loading.tsx        # Loading states

components/
├── AppShell.tsx       # Main app layout
├── PoolCard.tsx       # Pool display component
├── PoolGrid.tsx       # Pool grid layout
├── PerformanceChart.tsx # Chart visualization
├── ProposalItem.tsx   # Proposal display
├── VoteButton.tsx     # Voting interface
└── TransactionStatusIndicator.tsx # Transaction feedback

lib/
├── types.ts           # TypeScript type definitions
├── utils.ts           # Utility functions
└── constants.ts       # Mock data and constants
```

### Design System

The app follows a dark theme design system with:
- **Colors**: Dark background with accent colors
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent spacing scale
- **Components**: Reusable UI components
- **Motion**: Smooth transitions and animations

### Smart Contract Integration

The app is designed to integrate with smart contracts for:
- Multi-signature treasury management
- Governance token voting
- Automated profit distribution
- Investment execution

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

Required environment variables:
- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: OnchainKit API key for Base integration

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.
