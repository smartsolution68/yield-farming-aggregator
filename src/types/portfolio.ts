// Portfolio and financial data types

import { RiskTier } from "./common";

export interface PortfolioData {
  totalValue: number;
  change24h: number;
  currentAPY: number;
  isOptimized: boolean;
  autoRebalance: {
    isActive: boolean;
    lastMoveTime: string;
  };
  riskTier: RiskTier;
}

export interface AllocationItem {
  name: string;
  value: number;
  color: string;
}

export interface AllocationData {
  allocations: AllocationItem[];
}

export interface ActivityItem {
  title: string;
  description: string;
  timestamp: string;
  details?: string;
}

export interface ActivityData {
  recentActivities: ActivityItem[];
  allActivities: ActivityItem[];
}
