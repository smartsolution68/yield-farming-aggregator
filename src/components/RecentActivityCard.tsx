import React from "react";
import DashboardContent from "./DashboardContent";
import ScrollableContainer from "./ScrollableContainer";
import { ActivityItem } from "../types";

interface RecentActivityCardProps {
  readonly activities: ActivityItem[] | null;
  readonly isExpanded: boolean;
  readonly onToggleExpanded: () => void;
  readonly onViewAll: () => void;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const RecentActivityCard: React.FC<RecentActivityCardProps> = ({
  activities,
  isExpanded,
  onToggleExpanded,
  onViewAll,
}) => {
  if (!isExpanded) {
    // Thin strip view without DashboardContent wrapper
    return (
      <div
        className="bg-card border-theme border-l border-r rounded-lg px-3 py-1 flex items-center justify-between cursor-pointer hover:bg-card/80 transition-colors duration-200 min-h-[12px]"
        onClick={onToggleExpanded}
      >
        <div className="flex items-center gap-2">
          <span className="text-theme-quaternary font-medium text-sm">
            Recent Activity
          </span>
        </div>
        <div className="text-white flex-shrink-0">
          <svg width="12" height="12" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 6l4 4 4-4H4z" />
          </svg>
        </div>
      </div>
    );
  }

  // Expanded view with DashboardContent
  return (
    <DashboardContent height="lg">
      <div className="w-full h-full flex flex-col">
        {activities ? (
          <div
            className="flex items-center justify-between cursor-pointer transition-colors duration-200 flex-shrink-0 px-3 py-1 -mx-3 -my-1 rounded-lg"
            onClick={onToggleExpanded}
          >
            <div className="flex items-center gap-2">
              <span className="text-theme-quaternary font-medium text-sm">
                Recent Activity
              </span>
            </div>
            <div className="text-white transition-transform duration-300 flex-shrink-0 rotate-180">
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="currentColor"
              >
                <path d="M4 6l4 4 4-4H4z" />
              </svg>
            </div>
          </div>
        ) : (
          <div>No data available</div>
        )}

        {activities && (
          <div className="flex-1 flex flex-col min-h-0 mt-2">
            <ScrollableContainer
              className="flex-1 min-h-0"
              maxHeight="calc(100% - 40px)"
            >
              <div className="space-y-2 pr-2">
                {activities.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between py-1.5 border-b border-theme-border"
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className={`w-2 h-2} rounded-full mt-1.5 flex-shrink-0`}
                      />
                      <div className="flex flex-col">
                        <span className="text-theme-primary font-medium text-sm">
                          {activity.title}
                        </span>
                        <span className="text-theme-tertiary text-xs">
                          {activity.description}
                        </span>
                      </div>
                    </div>
                    <div className="text-white text-xs flex-shrink-0">
                      {activity.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollableContainer>

            <div className="flex-shrink-0 mt-2 pt-2 ">
              <button
                className="text-white hover:text-theme-primary text-xs transition-colors duration-200"
                onClick={onViewAll}
              >
                View All Activity →
              </button>
            </div>
          </div>
        )}
      </div>
    </DashboardContent>
  );
};

export default RecentActivityCard;
