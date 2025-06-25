"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAccount, useDisconnect } from "wagmi";
import { Protocol } from "@/types/protocol";
interface TopBarProps {
  className?: string;
}

// Internal TopBar component that uses wagmi hooks

const TopBarInternal: React.FC<TopBarProps> = ({ className }) => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);
  // Close dropdown when clicking outside
  const [protocolData, setProtocolData] = useState<Protocol>({
    timestamp: "",
    addrPool: "",
    projectName: "",
    meta: null,
    tvlUsd: 0,
    baseAPY: 0,
    token: [
      ""
    ],
    apy_7d: 0,
    apy_30D: 0
  }
  );
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    const fetchData = async () => {
      try {
        const protocalResponse = await fetch("http://18.118.8.29:5005/getData");
        const protocolDataRes = await protocalResponse.json();
        setProtocolData(protocolDataRes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleHomeClick = () => {
    console.log("Home click detected!");
    router.push("/");
  };

  const LogoIcon = (): React.JSX.Element => (
    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center overflow-hidden bg-transparent">
      <Image
        src="/logo.png"
        alt="HyperPool Logo"
        width={40}
        height={40}
        className="w-full h-full object-contain"
        style={{
          mixBlendMode: "screen",
          filter: "contrast(1.2) brightness(0.9)",
        }}
      />
    </div>
  );

  const HamburgerIcon = (): React.JSX.Element => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="text-white"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );

  const WalletContent = (): React.JSX.Element => (
    <>
      {mounted && isConnected ? (
        <div className="flex md:flex-row flex-col md:items-center gap-2 md:gap-2">
          <span className="text-sm text-theme-primary font-bold px-3 py-1 rounded-xl md:bg-transparent bg-theme-solid">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
          <button
            onClick={() => {
              disconnect();
              setIsDropdownOpen(false);
            }}
            className="btn-quaternary px-3 py-1 rounded text-sm"
          >
            Disconnect
          </button>
        </div>
      ) : mounted ? (
        <span className="text-sm text-theme-muted px-3 py-1">
          No wallet connected
        </span>
      ) : (
        <span className="text-sm text-theme-muted px-3 py-1">Loading...</span>
      )}
    </>
  );

  const MobileWalletContent = (): React.JSX.Element => (
    <>
      {mounted && isConnected ? (
        <div className="space-y-3">
          <div className="text-xs text-white uppercase tracking-wide font-medium">
            Connected Wallet
          </div>
          <div className="space-y-3">
            <div className="text-sm text-theme-primary font-mono bg-theme-solid px-4 py-3 rounded-lg text-center">
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </div>
            <button
              onClick={() => {
                disconnect();
                setIsDropdownOpen(false);
              }}
              className="btn-quaternary w-full py-3 rounded-lg text-sm font-medium"
            >
              Disconnect Wallet
            </button>
          </div>
        </div>
      ) : mounted ? (
        <div className="text-center py-3">
          <div className="text-sm text-theme-muted">No wallet connected</div>
        </div>
      ) : (
        <div className="text-center py-3">
          <div className="text-sm text-theme-muted">Loading...</div>
        </div>
      )}
    </>
  );

  return (
    <div
      className={`flex items-center justify-between p-3 md:p-4 bg-transparent ${className || ""
        }`}
    >
      {/* Left side - Logo and Title */}
      <div className="flex items-center gap-2 md:gap-3">
        <div
          onClick={handleHomeClick}
          className="flex items-center gap-2 md:gap-3 hover:opacity-80 transition-opacity cursor-pointer relative"
          role="button"
          tabIndex={0}
        >
          <LogoIcon />
          <h1 className="text-2xl font-bold">
            HyperPool
          </h1>
        </div>
        <span className="hidden md:block mx-3"></span>
        <a
          href="/whitepaper"

          rel="noopener noreferrer"
          className="hidden md:block text-sm text-white cursor-pointer hover:text-theme-primary transition-colors"
        >
          Whitepaper
        </a>
        <span className="hidden md:block mx-3"></span>

        <Link
          href="/privacy-policy"
          className="hidden md:block text-sm text-white cursor-pointer hover:text-theme-primary transition-colors"
        >
          Privacy Policy
        </Link>
        <span className="hidden md:block mx-3"></span>
        <Link
          href="/terms-of-use"
          className="hidden md:block text-sm text-white cursor-pointer hover:text-theme-primary transition-colors"
        >
          Terms of Use
        </Link>
        <span className="hidden md:block mx-3"></span>
        <Link
          href="/risk-disclosure"
          className="hidden md:block text-sm text-white cursor-pointer hover:text-theme-primary transition-colors"
        >
          Risk Disclosure
        </Link>
      </div>

      <div className="md:hidden md:flex items-center gap-3">
        <div className="bg-gradient-to-r from-primary-blue/20 to-primary-blue/10  p-3 flex-shrink-0">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
            <div className="flex w-full items-center sm:w-auto">
              <div className="text-primary-orange text-sm">
                NOW :
              </div>
              <div className="text-primary-blue font-sans  text-[1rem] font-bold">
                {protocolData.baseAPY >= 0 ? "+" : ""}{Number(protocolData.baseAPY).toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop - Right side content */}
      <div className="hidden md:flex items-center gap-3">
        <WalletContent />
      </div>

      {/* Mobile - Hamburger menu */}
      <div className="md:hidden" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="p-2 hover:bg-theme-solid rounded-md transition-colors"
          aria-label="Menu"
        >
          <HamburgerIcon />
        </button>

        {/* Mobile dropdown */}
        {isDropdownOpen && (
          <div className="absolute inset-x-4 top-[72px] bg-violet-950 border border-gray-400 rounded-lg shadow-lg z-[100] overflow-hidden">
            <div className="p-4">
              {/* Whitepaper link in mobile */}
              <div className="pb-3 border-b border-theme">
                <a
                  href="/whitepaper"

                  rel="noopener noreferrer"
                  className="flex text-[1rem] font-bold items-center justify-between py-3 px-3 text-primary-orange hover:text-theme-primary hover:bg-theme-solid rounded transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span>Whitepaper</span>
                </a>
              </div>

              {/* Privacy Policy link in mobile */}
              <div className="pb-3 border-b border-theme text-primary-orange">
                <Link
                  href="/privacy-policy"
                  className="flex text-[1rem] font-bold  items-center justify-between py-3 px-3 text-white hover:text-primary-orange hover:bg-theme-solid rounded transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span className="text-primary-orange">Privacy Policy</span>
                </Link>
              </div>

              {/* Terms of Use link in mobile */}
              <div className="pb-3 border-b border-theme text-primary-orange">
                <Link
                  href="/terms-of-use"
                  className="flex  text-[1rem] font-bold  items-center justify-between py-3 px-3 text-white hover:text-primary-orange hover:bg-theme-solid rounded transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span className="text-primary-orange">Terms of Use</span>
                </Link>
              </div>

              {/* Risk Disclosure link in mobile */}
              <div className="pb-3 border-b border-theme text-primary-orange">
                <Link
                  href="/risk-disclosure"
                  className="flex text-[1rem] font-bold items-center justify-between py-3 px-3 text-white hover:text-primary-orange hover:bg-theme-solid rounded transition-colors"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  <span className="text-primary-orange">
                    Risk Disclosure
                  </span>
                </Link>
              </div>

              {/* Wallet content */}
              <div className="pt-4">
                <MobileWalletContent />
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

// Client-only wrapper to prevent SSR issues
const TopBar: React.FC<TopBarProps> = (props) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a loading state during SSR/hydration
  if (!mounted) {
    return (
      <div
        className={`flex items-center justify-between p-3 md:p-4 bg-theme-solid ${props.className || ""
          }`}
      >
        <div className="flex items-center gap-2 md:gap-3">
          <div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.png"
              alt="HyperPool Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-2xl font-bold">
            HyperPool
          </h1>
        </div>
        <div className="text-sm text-theme-muted">Loading...</div>
      </div>
    );
  }

  return <TopBarInternal {...props} />;
};

export default TopBar;
export type { TopBarProps };
