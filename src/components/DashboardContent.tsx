import React from "react";

interface DashboardContentProps {
  readonly children: React.ReactNode;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const heightClasses = {
  sm: "md:h-32",
  md: "md:h-48",
  lg: "md:h-80",
  xl: "md:h-96",
  "2xl": "md:h-[32rem]",
} as const;

const DashboardContent: React.FC<DashboardContentProps> = ({
  children,
  height = "md",
}) => {
  return (
    <div
      className={`bg-card border-theme border-l border-r rounded-lg p-4 md:p-6 flex flex-col justify-between text-theme-primary w-full max-w-full overflow-hidden ${heightClasses[height]}`}
    >
      {children}
    </div>
  );
};

export default DashboardContent;
