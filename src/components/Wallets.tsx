"use client";

import React from "react";
import Image from "next/image";
import { useSwitchChain, useConnect } from "wagmi";


interface WalletsProps {
  readonly onConnectSuccess: () => void;
}

const Wallets: React.FC<WalletsProps> = ({onConnectSuccess}) => {
  const { connectors, connect } = useConnect();
  const { chains, switchChain } = useSwitchChain();

  const getWalletIcon = (name: string): string | null => {
    switch (name) {
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
      onConnectSuccess();
    } catch (error) {
      console.warn("Connection error:", error);
      
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Wallet Options */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col gap-3">
          {connectors.map((connector) => {
            const iconSrc = getWalletIcon(connector.name);
            return (
              <button
                key={connector.uid}
                onClick={() => handleConnect(connector)}
                className="flex items-center justify-start gap-3 bg-slate-700 hover:bg-slate-600 p-4 text-theme-primary  border border-theme rounded-lg  transition-all duration-200 cursor-pointer text-left w-full"
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

        {/* Close Button */}
      </div>
    </div>
  );
};

export default Wallets;
