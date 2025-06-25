import React from "react";
import DashboardContent from "./DashboardContent";
import ScrollableContainer from "./ScrollableContainer";

import ProtocolItem from "./ProtocolItem";
import { Protocol } from "@/types";

interface AvailableProtocolsCardProps {
  readonly selectedProtocol: "STEADY" | "GROWTH" | "SURGE";
  readonly onSelectProtocol: (protocol: "STEADY" | "GROWTH" | "SURGE") => void;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
  protocols: Protocol[] | null;
}

const AvailableProtocolsCard: React.FC<AvailableProtocolsCardProps> = ({
  height = "lg",
  protocols,
}) => {
  return (
    <DashboardContent height={height}>
      {protocols ? (
        <div className="flex flex-col h-full w-full">
          {/* <div className="flex-shrink-0">
            <div className="text-theme-quaternary">Available Protocols</div>
            <div className="text-theme-tertiary">Optimized protocols</div>
            <br />
            <ProtocolSwitch
              selectedProtocol={selectedProtocol}
              onSelect={onSelectProtocol}
            />
          </div> */}
          <div className="text-theme-quaternary">Available Protocols</div>
          <div className="mb-6 text-primary-orange">Optimized</div>

          <ScrollableContainer
            className="flex-1 mt-2"
            maxHeight="calc(100% - 120px)"
          >
            <div className="space-y-4 w-full pr-2">
              {protocols.map((protocol, i) => (
                <ProtocolItem key={i} protocol={protocol} />
              ))}
            </div>
          </ScrollableContainer>
        </div>
      ) : (
        <div>No data available</div>
      )}
    </DashboardContent>
  );
};

export default AvailableProtocolsCard;
