"use client";

import React from "react";
import { Protocol as ProtocolType, YieldChartData } from "@/types/protocol";
import YieldPerformanceGraph from "./YieldPerformanceGraph";
import PageHeader from "./PageHeader";



interface ProtocolProps {
  readonly yieldData: YieldChartData[];
  readonly protocol: ProtocolType;
}

const Protocol: React.FC<ProtocolProps> = ({ yieldData, protocol }) => {
  return (
    <div className="h-full flex flex-col space-y-2 p-2 sm:p-0">
      {/* Header */}
      <PageHeader
        title={protocol.projectName}
        showBorder={true}
      />
      {/* Yield Performance Graph */}
      <div className="bg-[#171F2E] border border-theme rounded p-2 sm:p-3 flex flex-col flex-1 min-h-0 ">
        <div className="flex-1 min-h-0 overflow-hidden">
          <YieldPerformanceGraph yieldData={yieldData ?? []} />
          
        </div>
      </div>

      
    </div>
  );
};

export default Protocol;
