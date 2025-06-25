// Component props and UI-related types

import { ActivityItem } from "./portfolio";
import { RiskTier, Token, FormData } from "./common";
import { Protocol } from "./protocol";

export interface DashboardContentProps {
  readonly children: React.ReactNode;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

export interface TotalPortfolioCardProps {
  totalValue: number;
  change24h: number;
}

export interface CurrentApyCardProps {
  apy: number;
  isOptimized: boolean;
}

export interface RiskTierCardProps {
  selectedProtocol: RiskTier;
}

export interface AutoRebalanceCardProps {
  isActive: boolean;
  lastMoveTime: string;
}

export interface YieldPerformanceCardProps {
  readonly className?: string;
}

export interface PortfolioAllocationCardProps {
  readonly className?: string;
}

export interface AvailableProtocolsCardProps {
  selectedProtocol: RiskTier;
  onSelectProtocol: (protocol: RiskTier) => void;
}

export interface ManageFundsCardProps {
  formData: FormData;
  isSubmitting: boolean;
  onTokenChange: (token: Token) => void;
  onAmountChange: (amount: string) => void;
  onDeposit: (event: React.FormEvent) => Promise<void>;
  onWithdraw: (event: React.FormEvent) => Promise<void>;
}

export interface RecentActivityCardProps {
  activities: ActivityItem[];
  isExpanded: boolean;
  onToggleExpanded: () => void;
  onViewAll: () => void;
}

export interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectWallet: () => void;
}

export interface ActivityModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface RiskTierTagProps {
  name: RiskTier;
}

export interface ProtocolSwitchProps {
  selectedProtocol: RiskTier;
  onSelect: (protocol: RiskTier) => void;
}

export interface ThemeToggleProps {
  theme: "dark" | "color";
  onToggle: () => void;
}

export interface InfoBlockProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface ScrollableContainerProps {
  children: React.ReactNode;
}

export interface ProtocolItemProps {
  protocol: Protocol;
  onSelect: () => void;
}

export interface TopBarProps {
  theme: "dark" | "color";
  onToggleTheme: () => void;
  onViewAllActivity: () => void;
}

export interface PortfolioAllocationProps {
  readonly className?: string;
}
