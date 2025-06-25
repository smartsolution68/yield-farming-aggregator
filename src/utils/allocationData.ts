import allocationData from "../data/allocationData.json";
import { AllocationItem, AllocationData } from "../types";

// Get allocation data
export const getAllocationData = (): AllocationItem[] => {
  const data = allocationData as AllocationData;
  return data.allocations;
};

// Simulate real-time allocation updates
export const createAllocationDataStream = (
  onUpdate: (allocations: AllocationItem[]) => void,
  intervalMs: number = 15000
) => {
  const baseAllocations = getAllocationData();

  const updateAllocations = () => {
    const updatedAllocations = baseAllocations.map((allocation) => ({
      ...allocation,
      // Simulate small changes in allocation values
      value: Math.max(0, allocation.value + (Math.random() - 0.5) * 100),
    }));

    onUpdate(updatedAllocations);
  };

  // Initial update
  updateAllocations();

  // Set up interval for updates
  const intervalId = setInterval(updateAllocations, intervalMs);

  // Return cleanup function
  return () => clearInterval(intervalId);
};

// Calculate total portfolio value from allocations
export const calculateTotalAllocation = (
  allocations: AllocationItem[]
): number => {
  return allocations.reduce((total, allocation) => total + allocation.value, 0);
};

// Format currency values
export const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);
