"use client";

import React from "react";
import PageHeader from "./PageHeader";
import ScrollableContainer from "./ScrollableContainer";
import { ActivityItem } from "../types";

//Dummy Data
import { getAllActivities } from "../utils/activityData";

interface ActivityProps {
  readonly activities?: readonly ActivityItem[];
}

const Activity: React.FC<ActivityProps> = ({ activities }) => {
  const defaultActivities = getAllActivities();
  const activityData = activities ?? defaultActivities;
  return (
    <div className="h-full flex flex-col">
      <PageHeader
        title="Activity"
        showBorder={true}
      />

      <div className="flex-1 min-h-0  mt-4">
        <ScrollableContainer className="h-full" maxHeight="100%">
          <div className="space-y-2 pr-2">
            {activityData.map((activity, index) => (
              <div
                key={index}
                className="flex items-start justify-between p-3 bg-transparent rounded border border-theme"
              >
                <div className="flex items-start gap-3 flex-1 min-w-0">
                  <div
                    className={`w-2 h-2 bg-blue-500  rounded-full mt-2 flex-shrink-0`}
                  />
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="text-theme-primary font-medium truncate">
                      {activity.title}
                    </span>
                    <span className="text-white truncate">
                      {activity.description}
                    </span>
                    {activity.details && (
                      <span className="text-gray-400 text-xs mt-1 truncate">
                        {activity.details}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-gray-400 text-xs flex-shrink-0 ml-2">
                  {activity.timestamp}
                </div>
              </div>
            ))}
          </div>
        </ScrollableContainer>
      </div>
    </div>
  );
};

export default Activity;
