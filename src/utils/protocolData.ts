import protocolsData from "../data/protocols.json";
import { Protocol, ProtocolsByTier, RiskTier } from "../types";

// Load static protocol data
export const getProtocolData = (): ProtocolsByTier => {
  return protocolsData as unknown as ProtocolsByTier;
};

// Get protocols for a specific risk tier
export const getProtocolsByTier = (tier: RiskTier): Protocol[] => {
  const data = getProtocolData();
  return data[tier] || [];
};

// Calculate average APY for a tier
export const calculateAverageAPY = (protocols: Protocol[]): number => {
  if (protocols.length === 0) return 0;

  const totalAPY = protocols.reduce((sum, protocol) => sum + protocol.baseAPY, 0);
  return parseFloat((totalAPY / protocols.length).toFixed(1));
};

// Calculate total TVL for a tier
export const calculateTotalTVL = (protocols: Protocol[]): number => {
  return protocols.reduce((sum, protocol) => sum + protocol.tvlUsd, 0);
};

// Format TVL value to readable string
export const formatTVL = (value: number): string => {
  if (value >= 1_000_000_000) {
    return `${(value / 1_000_000_000).toFixed(1)}B`;
  } else if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}M`;
  } else if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}K`;
  } else {
    return value.toString();
  }
};

// Get APY status color class
export const getAPYStatusColor = (apy: number): string => {
  if (apy >= 50) return "text-green-400";
  if (apy >= 20) return "text-yellow-400";
  if (apy >= 0) return "text-blue-400";
  return "text-red-400";
};

export const getRiskLevel = (protocol: string) => {
  switch (protocol) {
    case "STEADY":
      return "Low Risk";
    case "GROWTH":
      return "Medium Risk";
    case "SURGE":
      return "High Risk";
  }
};
