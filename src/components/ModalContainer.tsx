"use client";

import React from "react";

interface ModalContainerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  zIndex?: string;
  backdrop?: boolean;
}

const ModalContainer: React.FC<ModalContainerProps> = ({
  isOpen,
  onClose,
  children,
  zIndex = "z-40",
  backdrop = true,
}) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const backdropClass = backdrop ? "bg-black/60" : "bg-transparent";

  return (
    <div
      className={`fixed inset-0 w-screen h-screen ${backdropClass} flex items-center justify-center ${zIndex} p-4`}
      onClick={handleBackdropClick}
    >
      <div className="bg-card rounded-3xl p-4 md:p-6 w-full max-w-sm md:w-96 h-[80vh] md:h-[32rem] text-center text-theme-primary shadow-theme flex flex-col justify-between">
        {children}
      </div>
    </div>
  );
};

export default ModalContainer;
export type { ModalContainerProps };
