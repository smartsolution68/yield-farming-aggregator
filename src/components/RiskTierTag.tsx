import React from "react";

type RiskTierTagProps = {
  name: "STEADY" | "GROWTH" | "SURGE";
};

const RiskTierTag: React.FC<RiskTierTagProps> = ({ name }) => {
  const getTagStyles = (tagName: string) => {
    const baseStyles = "px-3 py-1 rounded text-sm font-medium text-white mb-4";

    switch (tagName.toLowerCase()) {
      case "steady":
        return `${baseStyles} risk-tier-steady`;
      case "growth":
        return `${baseStyles} risk-tier-growth`;
      case "surge":
        return `${baseStyles} risk-tier-surge`;
      default:
        return `${baseStyles} risk-tier-steady`;
    }
  };

  return <span className={getTagStyles(name)}>{name}</span>;
};

export default RiskTierTag;
