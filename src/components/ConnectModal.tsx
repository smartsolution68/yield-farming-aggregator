"use client";

import React from "react";
import { IoWalletOutline } from "react-icons/io5"; // Ionicon Wallet Outline
import Image from "next/image";
import ConnectionSteps from "./ConnectionSteps";
import ModalContainer from "./ModalContainer";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectWallet: () => void;
  isConnectionRequirementsMet: boolean;
  handleConnectionRequirementsMet: (isMet: boolean) => void;
}

const ConnectModal: React.FC<ConnectModalProps> = ({
  isOpen,
  onClose,
  onConnectWallet,
  isConnectionRequirementsMet,
  handleConnectionRequirementsMet,
}): React.JSX.Element | null => {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleConnectionRequirementsMet(e.target.checked);
  };

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose} zIndex="z-30">
      <div className="flex-1 flex flex-col justify-center space-y-3 md:space-y-4">
        {/* Logo Placeholder */}
        <div className="flex justify-center">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="HyperPool Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold">
          HyperPool
        </h1>

        {/* Subtitle */}
        <h2 className="text-xs md:text-sm font-medium text-white px-2">
          <span className="text-primary-orange">Autonomous</span> Yield Routing
          for DeFi <span className="text-primary-orange">Degens</span>
        </h2>

        {/* Description */}
        <div className="space-y-2">
          <p className="text-xs md:text-sm text-white">
            Deposit once, earn continuously.
          </p>
          <p className="w-full md:w-3/4 mx-auto text-xs md:text-sm text-white px-2 md:px-0">
            We automatically optimize your yields and route to the
            highest-performing pools.
          </p>
        </div>

        {/* Security info */}
        <div className="flex items-center justify-center text-xs text-theme-muted">
          <div className="w-2 h-2 border border-primary-orange rounded-sm mr-2"></div>
          <span className="text-primary-blue">
            Non-custodial • Audited • Secure
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-3 md:space-y-4 pb-2">
        {/* Connect Wallet Button */}
        <button
          onClick={onConnectWallet}
          className="w-full md:w-3/4 mx-auto py-2 px-4 rounded-xl font-semibold text-sm transition-all duration-200 btn-quaternary flex items-center justify-center gap-2"
          disabled={!isConnectionRequirementsMet}
        >
          <IoWalletOutline />
          Connect Wallet
        </button>

        <div className="mb-2">
          <ConnectionSteps />
        </div>

        <div className="flex flex-col items-center gap-2 text-xs text-white">
          <div className="flex items-start gap-2 px-2">
            <input
              type="checkbox"
              id="us-person-checkbox"
              checked={isConnectionRequirementsMet}
              onChange={handleCheckboxChange}
              className="w-3 h-3 mt-0.5 accent-primary-orange border-gray-300 rounded focus:ring-orange-500 flex-shrink-0"
            />
            <label
              htmlFor="us-person-checkbox"
              className="cursor-pointer text-left leading-tight"
            >
              I am not a US person
            </label>
          </div>
          <p className="text-primary-gray text-center text-xs leading-tight px-2 md:px-4">
            U.S. Prohibited: HyperPool is not available to U.S. citizens or
            residents due to regulatory restrictions. To continue please
            indicate you aren&apos;t a US citizen.
          </p>
        </div>
      </div>
    </ModalContainer>
  );
};

export default ConnectModal;
export type { ConnectModalProps };
