"use client";

import React, { useState } from "react";
import ConnectionSteps from "./ConnectionSteps";
import Wallets from "./Wallets";



const Connect: React.FC = () => {
  const [showConnectWalletModal, setShowConnectWalletModal] = useState<boolean>(false);


  const handleConnectSuccess = () => {
    // Don't navigate immediately - wait for isConnected to become true
    // The useEffect will handle the navigation when isConnected changes
  };
  const handleOpenConnectWalletModal = () => {
    setShowConnectWalletModal(true)
  }
  const handleCloseConnectWalletModal = () => {
    setShowConnectWalletModal(false)
  }
  return (
    <>
      <div className="mb-8 flex flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-target h-16 w-16 text-cyan-400 mx-auto mb-6"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
        </svg>

        <h1 className="text-5xl text-white font-bold mb-4">HyperPool</h1>
        <div className="text-2xl mb-4">
          <span className="text-cyan-400">Auto-Yield</span> For{" "}
          <span className="text-orange-400">Degens</span>
        </div>
        {/* <p className="text-xl text-white mb-6">Drop. Earn. Repeat.</p> */}
        <p className="text-lg text-gray-400 ">
          AI-automated cross-chain yield farming.
        </p>
        <p className="text-lg text-gray-400 mb-8">High risk. High return.</p>

        <div className="flex justify-center items-center space-x-6 text-sm text-cyan-400 mb-8">
          <span>Non-custodial</span>
          <span>•</span>
          <span>Battle-tested</span>
          <span>•</span>
          <span>Audited</span>
        </div>
        <span className="pb-3">In Beta version until July 10th. High yields coming then!</span>


        <button
          onClick={handleOpenConnectWalletModal}
          data-slot="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md  [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground shadow-xs hover:bg-primary/90 px-4 py-2 has-[>svg]:px-3 relative min-w-[200px] h-12 text-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide text-white lucide-wallet h-5 w-5 mr-2"
            aria-hidden="true"
          >
            <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
          </svg>
          <span className="text-white">Connect Wallet</span>
        </button>

        <h2 className="text-white mt-2">Three steps to degen glory:</h2>
        {/* Connection Steps with mobile spacing */}
        <div className="mt-2 sm:mt-4">
          <ConnectionSteps />
        </div>
      </div>
      {showConnectWalletModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-slate-800 w-[90vw] sm:w-[50vw] md:w-[50vw] lg:w-[30vw] xl:w-[400px] border border-white/20 rounded-lg p-6 max-w-md mx-4">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-wallet h-6 w-6 text-cyan-400 mr-2"
                  aria-hidden="true"
                >
                  <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path>
                  <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path>
                </svg>
                Select a Wallet
              </h3>
              <button className="text-gray-400 hover:text-white" onClick={handleCloseConnectWalletModal}>✕</button>
            </div>

            <Wallets
              onConnectSuccess={handleConnectSuccess}
            />
            <button className="flex justify-center w-full mt-4 p-3 bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseConnectWalletModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Connect;
