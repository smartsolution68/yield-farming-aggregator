import portfolioData from "../data/portfolioData.json";
import { PortfolioData } from "../types";

// Get current portfolio data
export const getPortfolioData = (): PortfolioData => {
  return portfolioData as unknown as PortfolioData;
};

// Simulate real-time portfolio updates
export const createPortfolioDataStream = (
  onUpdate: (data: PortfolioData) => void,
  intervalMs: number = 10000
) => {
  const baseData = getPortfolioData();

  const updateData = () => {
    const updatedData: PortfolioData = {
      ...baseData,
      // Simulate small changes in portfolio value and APY
      totalValue: baseData.totalValue + (Math.random() - 0.5) * 100,
      change24h: baseData.change24h + (Math.random() - 0.5) * 2,
      currentAPY: baseData.currentAPY + (Math.random() - 0.5) * 1,
    };

    onUpdate(updatedData);
  };

  // Initial update
  updateData();

  // Set up interval for updates
  const intervalId = setInterval(updateData, intervalMs);

  // Return cleanup function
  return () => clearInterval(intervalId);
};

// Format currency values
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

// Format percentage values
export const formatPercentage = (value: number): string => {
  const sign = value >= 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
};
