import activityData from "../data/activityData.json";
import { ActivityItem, ActivityData } from "../types";

// Get recent activities (last 4)
export const getRecentActivities = (): ActivityItem[] => {
  const data = activityData as ActivityData;
  return data.recentActivities;
};

// Get all activities with pagination
export const getAllActivities = (): ActivityItem[] => {
  const data = activityData as ActivityData;
  return data.allActivities;
};



export const formatActivityTime = (timeString: string): string => {
  // For now, return the time string as-is since it's already formatted
  // In a real app, you might parse and format dates here
  return timeString;
};

// Simulate real-time activity updates
export const createActivityStream = (
  onNewActivity: (activity: ActivityItem) => void,
  intervalMs: number = 30000
) => {
  const generateRandomActivity = (): ActivityItem => {
    

    return {
      title: `New activity`,
      description: `Simulated  activity for demo`,
      timestamp: "Just now",
      details: "random Detailes",
    };
  };

  // Set up interval for new activities
  const intervalId = setInterval(() => {
    const newActivity = generateRandomActivity();
    onNewActivity(newActivity);
  }, intervalMs);

  // Return cleanup function
  return () => clearInterval(intervalId);
};
