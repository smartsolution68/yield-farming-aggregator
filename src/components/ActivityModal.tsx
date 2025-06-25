import React from "react";
import ScrollableContainer from "./ScrollableContainer";
import { getAllActivities } from "../utils/activityData";
import { ActivityItem } from "../types";

interface ActivityModalProps {
  readonly isOpen: boolean;
  readonly onClose: () => void;
  readonly activities?: readonly ActivityItem[];
}

const ActivityModal: React.FC<ActivityModalProps> = ({
  isOpen,
  onClose,
  activities,
}) => {
  // Use activities from props or fallback to data utility function
  const defaultActivities = getAllActivities();
  const activityData = activities ?? defaultActivities;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-theme flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-lg w-full max-w-4xl h-[80vh] flex flex-col shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-theme flex-shrink-0">
          <div>
            <h2 className="text-theme-primary text-xl font-semibold">
              Complete Activity History
            </h2>
            <p className="text-white text-sm mt-1">
              All your transaction and portfolio activities
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-theme-primary p-2 rounded-md hover:bg-theme-solid transition-colors duration-200"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        </div>

        <div className="flex-1 min-h-0 p-6 pr-4">
          <ScrollableContainer className="h-full" maxHeight="100%">
            <div className="space-y-4 pr-4">
              {activityData.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between py-3 border-b border-theme"
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-2 h-2} rounded-full mt-2 flex-shrink-0`}
                    />
                    <div className="flex flex-col">
                      <span className="text-theme-primary font-medium">
                        {activity.title}
                      </span>
                      <span className="text-white text-sm">
                        {activity.description}
                      </span>
                      {activity.details && (
                        <span className="text-theme-muted text-xs mt-1">
                          {activity.details}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="text-theme-muted text-sm flex-shrink-0">
                    {activity.timestamp}
                  </div>
                </div>
              ))}
            </div>
          </ScrollableContainer>
        </div>
      </div>
    </div>
  );
};

export default ActivityModal;
