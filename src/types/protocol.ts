// Protocol and DeFi related types

export interface Protocol {
  timestamp: string;
  addrPool: string;
  projectName: string;
  meta: null,
  tvlUsd: number;
  baseAPY: number;
  token: [string];
  apy_7d: number;
  apy_30D: number;

  // id: string;
  // name: string;
  // protocol: string;
  // token: string;
  // tvl: string;
  // tvlValue: number;
  // apy: number;
  // status: "active" | "inactive" | "maintenance";
  // lastUpdated: string;
}

export type ProtocolsByTier = {
  STEADY: Protocol[];
  GROWTH: Protocol[];
  SURGE: Protocol[];
};

export type YieldDataPoint = {
  protocol: string;
  apy: number;
  risk: "Low" | "Medium" | "High";
  color: string;
};

export type YieldDataWithTime = YieldDataPoint & {
  timestamp: number;
};

export interface TooltipData {
  protocol: string;
  apy: number;
  risk: string;
}

export type YieldChartData = {
  time: string;
  steady: number;
  growth: number;
  surge: number;
};

export interface StakeData {
  tvl: number;
  tvlChange: number;
  allocations: {
    protocol: string;
    amount: string;
    percentage: string;
  }[];
};

