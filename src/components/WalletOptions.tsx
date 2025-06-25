"use client";

import * as React from "react";
import Image from "next/image";
import { useSwitchChain, useConnect } from "wagmi";
import ModalContainer from "./ModalContainer";

interface WalletOptionsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WalletOptions({ isOpen, onClose }: WalletOptionsProps) {
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();

  const getWalletIcon = (uname: string): string | null => {
    switch (uname) {
      case "MetaMask":
        return "/assets/img/social/metamask.png";
      case "WalletConnect":
        return "/assets/img/social/walletconnect.png";
      case "Injected":
        return "/assets/img/social/injected.png";
      case "Coinbase Wallet":
        return "/assets/img/social/coinbase.png";
      case "Trust Wallet":
        return "/assets/img/social/trust-wallet.png";
      default:
        return null;
    }
  };

  const handleConnect = async (connector: (typeof connectors)[0]) => {
    try {
      if (chains[0]?.id !== 137) {
        switchChain({ chainId: 137 });
      }
      await connect({ connector });
      onClose();
    } catch (error) {
      console.warn("Connection error:", error);
      onClose();
    }
  };

  return (
    <ModalContainer
      isOpen={isOpen}
      onClose={onClose}
      zIndex="z-[9999]"
      backdrop={false}
    >
      <div>
        <h2 className="text-primary-blue text-lg  mb-6 text-center">
          Select a Wallet
        </h2>

        <div className="flex flex-col gap-3 mb-8 px-4">
          {connectors.map((connector) => {
            const iconSrc = getWalletIcon(connector.name);
            return (
              <button
                key={connector.uid}
                onClick={() => handleConnect(connector)}
                className="flex items-center justify-start gap-3 p-3 text-theme-primary bg-input-background border border-theme rounded-lg hover:bg-theme-solid transition-all duration-200 cursor-pointer text-left w-full"
              >
                {iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={connector.name}
                    width={24}
                    height={24}
                    className="w-6 h-6 flex-shrink-0"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                )}
                <span className="text-sm font-medium">{connector.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center px-4">
        <button
          onClick={onClose}
          className="btn-outline-orange flex items-center gap-2"
        >
          <span>Close</span>
        </button>
      </div>
    </ModalContainer>
  );
}
