import React from "react";
import { IoShieldOutline } from "react-icons/io5";

type ProtocolSwitchProps = {
  selectedProtocol: "STEADY" | "GROWTH" | "SURGE";
  onSelect: (protocol: "STEADY" | "GROWTH" | "SURGE") => void;
};

const ProtocolSwitch: React.FC<ProtocolSwitchProps> = ({
  selectedProtocol,
  onSelect,
}) => {
  return (
    <div className="flex bg-theme-solid rounded-full p-1 w-full">
      <button
        className={`flex items-center justify-center flex-1 py-2 px-4 rounded-full text-theme-primary ${
          selectedProtocol === "STEADY" ? "apy-steady" : ""
        }`}
        onClick={() => onSelect("STEADY")}
      >
        <IoShieldOutline size={16} className="mr-2" />
        Steady
      </button>
      {/* <button
        className={`flex items-center justify-center flex-1 py-2 px-4 rounded-full text-theme-primary ${
          selectedProtocol === "GROWTH" ? "apy-growth" : ""
        }`}
        onClick={() => onSelect("GROWTH")}
      >
        <IoAnalyticsOutline size={16} className="mr-2" />
        Growth
      </button>
      <button
        className={`flex items-center justify-center flex-1 py-2 px-4 rounded-full text-theme-primary ${
          selectedProtocol === "SURGE" ? "apy-surge" : ""
        }`}
        onClick={() => onSelect("SURGE")}
      >
        <IoFlashOutline size={16} className="mr-2" />
        Surge
      </button> */}
    </div>
  );
};

export default ProtocolSwitch;
