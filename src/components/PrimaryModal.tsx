"use client";

import React, { useState, useEffect } from "react";
import { useAccount } from "wagmi";
import ManageFunds from "./ManageFunds";
import Portfolio from "./Portfolio";
import Activity from "./Activity";
import Connect from "./Connect";

import LoadingSpinner from "./LoadingSpinner";
import {
  IoDiamondOutline,
  IoNotificationsOutline,
  IoWalletOutline,
} from "react-icons/io5";
import { Protocol as ProtocolType, StakeData } from "@/types/protocol";
import { ActivityItem } from "@/types";

interface PrimaryModalProps {
  readonly activeComponent:
  | "manageFunds"
  | "portfolio"
  | "activity";
  
  readonly onComponentChange: (
    component: "manageFunds" | "portfolio" | "activity"
  ) => void;
  readonly protocol: ProtocolType;
  readonly stakeData: StakeData;
  readonly activityItems: ActivityItem[];
}

type ConnectionState = "checking" | "connected" | "disconnected";
type ActiveView =
  | "connect"
  | "wallets"
  | "manageFunds"
  | "portfolio"
  | "activity";

const PrimaryModal: React.FC<PrimaryModalProps> = ({
  activeComponent,
  onComponentChange,
  protocol,
  stakeData,
  activityItems,
}) => {
  const { isConnected } = useAccount();
  const [mounted, setMounted] = useState(false);
  const [connectionState, setConnectionState] =
    useState<ConnectionState>("checking");
  const [activeView, setActiveView] = useState<ActiveView>("connect");
  const [activities, setActivities] = useState<ActivityItem[]>(activityItems); // ✅ activity state

  const iconButtonClass =
    "w-8 h-8 flex items-center justify-center rounded cursor-pointer transition-colors duration-200";
  const activeIconClass =
    "border-1 border-primary-blue text-primary-blue bg-transparent";
  const inactiveIconClass =
    "border-1 border-transparent text-white hover:text-theme-primary bg-transparent";
  const sendActivity = async (activity: {
    title: string;
    description: string;
    details: string;
    timestamp: number;
  }) => {
    try {
      const res = await fetch("http://18.118.8.29:5005/activity", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(activity),
      });
      const data = await res.json();

      if (data.success && data["activities"]) {
        setActivities(data["activities"]); // ✅ update activities
      } else {
        console.error("Failed to save activity");
      }
    } catch (error) {
      console.error("Error sending activity:", error);
    }
  };
  // Handle mounting and connection state
  useEffect(() => {
    setMounted(true);

    const timer = setTimeout(() => {
      const newConnectionState: ConnectionState = isConnected
        ? "connected"
        : "disconnected";
      setConnectionState(newConnectionState);

      if (newConnectionState === "connected") {
        setActiveView(activeComponent);
      } else {
        setActiveView("connect");
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [isConnected, activeComponent]);

  // Handle connection state changes after initial mount
  useEffect(() => {
    if (!mounted || connectionState === "checking") return;

    if (isConnected) {
      setConnectionState("connected");
      setActiveView(activeComponent);
    } else {
      setConnectionState("disconnected");
      setActiveView("connect");
    }
  }, [isConnected, mounted, connectionState, activeComponent]);

  // Sync activeView with activeComponent when connected
  useEffect(() => {
    if (
      connectionState === "connected" &&
      ["portfolio", "manageFunds", "activity"].includes(
        activeComponent
      )
    ) {
      setActiveView(activeComponent);
    }
  }, [activeComponent, connectionState]);

  useEffect(() => {
    console.log("activityItems updated:", activityItems);
    setActivities(activityItems);
  }, [activityItems]);



  const handleComponentChange = (
    component:  "manageFunds" | "portfolio" | "activity"
  ) => {
    setActiveView(component);
    onComponentChange(component);
  };

  const renderDisconnectComponent = () => {
    return (
      <Connect />
    )
  }

  const renderActiveComponent = () => {
    // If connected, show the main components
    switch (activeView) {
      case "portfolio":
        return <Portfolio stakeData={stakeData} protocol={protocol} />;
      case "manageFunds":
        return <ManageFunds sendActivity={sendActivity} />;
      case "activity":
        return <Activity activities={activities} />;
      default:
        return <Portfolio stakeData={stakeData} protocol={protocol} />;
    }
  };

  const shouldShowNavigation = connectionState === "connected";

  // Show loading spinner while checking connection
  if (!mounted || connectionState === "checking") {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <LoadingSpinner size="md" message="Loading..." />
      </div>
    );
  }

  return (
    <div>
      {!shouldShowNavigation && (
        <div className="text-center mb-16">
          {renderDisconnectComponent()}
        </div>
      )}
      {shouldShowNavigation && (

        <div className="height-setup bg-white/5 border rounded-lg border-white/10 w-[95vw] h-[80vh] sm:w-[95vw] sm:h-[90vh] md:w-[70vw] md:h-[83vh] lg:w-[60vw] lg:h-[83vh] ">
          <div className="  p-3 sm:p-4 md:p-5 flex flex-col h-full">
            {/* Top section with icons - only show when connected and not on connect/wallets */}

            <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 md:mb-6">
              {/* Portfolio Icon */}
              <button
                className={`${iconButtonClass} ${activeView === "portfolio" ? activeIconClass : inactiveIconClass
                  }`}
                onClick={() => handleComponentChange("portfolio")}
                title="Portfolio"
              >
                <IoDiamondOutline className="text-lg" />
              </button>

              {/* Manage Funds Icon */}
              <button
                className={`${iconButtonClass} ${activeView === "manageFunds"
                  ? activeIconClass
                  : inactiveIconClass
                  }`}
                onClick={() => handleComponentChange("manageFunds")}
                title="Manage Funds"
              >
                <IoWalletOutline className="text-lg" />
              </button>



              {/* Activity Icon */}
              <button
                className={`${iconButtonClass} ${activeView === "activity" ? activeIconClass : inactiveIconClass
                  }`}
                onClick={() => handleComponentChange("activity")}
                title="Activity"
              >
                <IoNotificationsOutline className="text-lg" />
              </button>
            </div>

            {/* Content area with mobile optimization */}
            <div className="flex-1 overflow-hidden min-h-0">
              {renderActiveComponent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrimaryModal;
