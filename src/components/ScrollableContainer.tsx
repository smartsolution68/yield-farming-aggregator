"use client";

import React from "react";

interface ScrollableContainerProps {
  readonly children: React.ReactNode;
  readonly className?: string;
  readonly maxHeight?: string;
}

const ScrollableContainer: React.FC<ScrollableContainerProps> = ({
  children,
  className = "",
  maxHeight = "100%",
}) => {
  return (
    <div
      className={`overflow-y-auto overflow-x-hidden ${className} pb-35`}
      style={{ maxHeight }}
    >
      <style jsx>{`
        div::-webkit-scrollbar {
          width: 8px;
        }

        div::-webkit-scrollbar-track {
          background: var(--card-background);
          border-radius: 4px;
        }

        div::-webkit-scrollbar-thumb {
          background: var(--border);
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: var(--text-muted);
        }

        div::-webkit-scrollbar-corner {
          background: var(--card-background);
        }

        /* Firefox scrollbar styling */
        div {
          scrollbar-width: thin;
          scrollbar-color: var(--border) var(--card-background);
        }
      `}</style>
      {children}
    </div>
  );
};

export default ScrollableContainer;
