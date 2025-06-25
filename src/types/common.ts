// Common types used across the application

export type Token = "USDC" | "DAI" | "USDT" | "ETH";

export type Theme = "dark" | "color";

export type RiskTier = "STEADY" | "GROWTH" | "SURGE";

export interface FormData {
  token: Token;
  amount: string;
}

export interface TransactionResult {
  success: boolean;
  txHash?: string;
  error?: string;
}
