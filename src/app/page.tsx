"use client";

import React, { useState, useEffect } from "react";
import PrimaryModal from "@/components/PrimaryModal";

//Component
import Faq from "../components/Faq";
import ScrollableContainer from "../components/ScrollableContainer";

//Dummy Data

import { Protocol, StakeData } from "@/types/protocol";
import {ActivityItem} from "@/types/portfolio"


type ActiveComponent = "portfolio" | "manageFunds" | "activity";

const DemoPage: React.FC = () => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("portfolio");
  
  const [protocolData, setProtocolData] = useState<Protocol>({
    timestamp: "",
    addrPool: "",
    projectName: "",
    meta: null,
    tvlUsd: 0,
    baseAPY: 0,
    token: [
      ""
    ],
    apy_7d: 0,
    apy_30D: 0
  }
  );
  const [stakeData, setStakeData] = useState<StakeData>({
    tvl: 0,
    tvlChange: 0,
    allocations: [{
      protocol: "",
      amount: "",
      percentage: "",
    }],
  });

  
  const [activityData, setActivityData] = useState<ActivityItem[]>([]);



  useEffect(() => {

    const fetchData = async () => {

      try {
        const protocalResponse = await fetch("http://18.118.8.29:5005/getData");
        const protocolDataRes = await protocalResponse.json();

        const stakeResponse = await fetch("http://18.118.8.29:5005/getVolume");
        const stakeDataRes = await stakeResponse.json();

        const activityResponse = await fetch("http://18.118.8.29:5005/activity");
        const activityDataRes = await activityResponse.json();

        setProtocolData(protocolDataRes);
        setStakeData(stakeDataRes);
        setActivityData(activityDataRes["activities"]);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  //Dummy Data


  const protocol = protocolData;
  const stake = stakeData
  const activity=activityData;

  return (

    <ScrollableContainer>
      <div className="flex items-center justify-center p-4">
        <PrimaryModal
          activeComponent={activeComponent}
          onComponentChange={setActiveComponent}
          protocol={protocol}
          stakeData={stake}
          activityItems={activity}
        />
      </div>
      <Faq />
    </ScrollableContainer>
  );
};

export default DemoPage;
