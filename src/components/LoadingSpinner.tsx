import React from "react";

interface LoadingSpinnerProps {
  readonly size?: "sm" | "md" | "lg";
  readonly message?: string;
  readonly className?: string;
}

const sizeClasses = {
  sm: "h-6 w-6",
  md: "h-10 w-10",
  lg: "h-16 w-16",
} as const;

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  message = "Loading...",
  className = "",
}) => {
  const spinnerSize = sizeClasses[size];

  return (
    <div
      className={`flex flex-col items-center justify-center space-y-4 ${className}`}
    >
      <div className={`${spinnerSize} relative`}>
        {/* Outer ring */}
        <div
          className={`${spinnerSize} rounded-full border-4 border-gray-600 border-opacity-20`}
        />
        {/* Spinning ring */}
        <div
          className={`${spinnerSize} rounded-full border-4 border-transparent border-t-primary-orange animate-spin absolute top-0 left-0`}
        />
      </div>
      {message && (
        <p className="text-sm text-white font-mono text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;
