"use client";

import React, { useEffect, useState } from "react";
import PageHeader from "./PageHeader";

import { CONTRACT_ADDRESS, CONTRACT_ABI, USDC_ADDRESS, USDC_ABI } from '@/constants/contract';

import { type BaseError, useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { ToastContainer, toast } from 'react-toastify';
import { formatUnits, parseUnits } from 'viem';




interface ActivityData {

  title: string;

  description: string;

  details: string;

  timestamp: number;

}
interface ManageFundsProps {
  sendActivity: (activity: ActivityData) => void;
}
const ManageFunds: React.FC<ManageFundsProps> = ({ sendActivity }) => {

  const [amount, setAmount] = useState("");
  const { address } = useAccount();
  const [approveHash, setApproveHash] = useState<`0x${string}` | undefined>();
  const [depositHash, setDepositHash] = useState<`0x${string}` | undefined>();
  const [withdrawHash, setWithdrawHash] = useState<`0x${string}` | undefined>();

  const { data: hash,
    error,

    writeContractAsync } = useWriteContract();

  const {
    isSuccess: isApproveConfirmed,
  } = useWaitForTransactionReceipt({
    hash: approveHash,
  });

  const {
    isSuccess: isDepositConfirmed,
    isLoading: isDepositing,
  } = useWaitForTransactionReceipt({
    hash: depositHash,
  });
  const {
    isSuccess: isWithdrawConfirmed,
    isLoading: isWithdrawing,
  } = useWaitForTransactionReceipt({
    hash: withdrawHash,
  });

  const { data: initialDeposit,
    refetch: refetchInitialBalance} = useReadContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'getInitialDeposit',
      args: [address!],
      query: {
        enabled: !!address, // only fetch when address is available
      },
    });
  const initialBalance = initialDeposit ? formatUnits(initialDeposit as bigint, 6) : "0";
  //
  const { data: availableBalance,
    refetch: refetchAvailableBalance,
   } = useReadContract({
      address: CONTRACT_ADDRESS,
      abi: CONTRACT_ABI,
      functionName: 'getAvailableBalance',
      args: [address!],
      query: {
        enabled: !!address, // only fetch when address is available
      },
    });
  const available = availableBalance ? formatUnits(availableBalance as bigint, 6) : "0";

  const [isShowDepositModal, setIsShowDepositModal] = useState<boolean>(false);
  const [isShowRiskModal, setIsShowRiskModal] = useState<boolean>(false);
  const [isShowDepositSuccessModal, setIsShowDepositSuccessModal] = useState<boolean>(false);
  const [isShowWidthrawSuccessModal, setIsShowWidthrawSuccessModal] = useState<boolean>(false);
  const [isConnectionRequirementsMet, setIsConnectionRequirementsMet] = useState<boolean>(false)


  const handleCheckboxChange = () => {
    switch (isConnectionRequirementsMet) {
      case true:
        setIsConnectionRequirementsMet(false);
        break;
      case false:
        setIsConnectionRequirementsMet(true);
        break;
      default:
        setIsConnectionRequirementsMet(false);
        break;
    }
  }
  const handleShowDepositModal = () => {
    setIsShowDepositModal(true);
  }
  const handleCloseDepositModal = () => {
    setIsShowDepositModal(false);
  }
  const handleShowRiskModal = () => {
    setIsShowRiskModal(true);
    setIsShowDepositModal(false);
  }
  const handleCloseRiskModal = () => {
    setIsShowRiskModal(false);
  }

  const handleDeposit = async () => {
    try {

      setIsShowDepositModal(false);
      setIsShowRiskModal(false);
      const usdcAmount = parseUnits(amount.toString(), 6); // USDC uses 6 decimals



      // 1. Approve your smart contract to spend USDC
      const approveTx = await writeContractAsync({
        address: USDC_ADDRESS,
        abi: USDC_ABI,
        functionName: "approve",
        args: [CONTRACT_ADDRESS, usdcAmount],
      });
      setApproveHash(approveTx);


      // if (isApproveConfirmed) {
      //   console.log("Deposit:", amount);

      //   await writeContractAsync({
      //     address: CONTRACT_ADDRESS,
      //     abi: CONTRACT_ABI,
      //     functionName: 'deposit',
      //     args: [parseUnits(amount.toString(), 6), address!],
      //   });
      //   // 
      //   if (isDepositConfirmed) {
      //     setIsShowDepositSuccessModal(true);
      //     await refetchInitialBalance();
      //     await refetchAvailableBalance();

      //     // Show Toast When Success
      //     // toast.success("Successfully Staked", {
      //     //   autoClose: 3000,
      //     //   draggable: true,
      //     //   theme: "dark"
      //     // })
      //     const activity: ActivityData = {
      //       title: `Deposited ${amount.toString()} USDC`,
      //       description: 'Optimized allocation into AAVE',
      //       details: `Transaction: ${hash?.toString()}`,
      //       timestamp: Math.floor(Date.now() / 1000)
      //     };

      //     sendActivity(activity);
      //   } else {
      //     toast.error("Failed to deposit", {
      //       autoClose: 3000,
      //       draggable: true,
      //       theme: "dark"
      //     })
      //   }

      // }



    } catch (error) {
      console.error("Deposit failed:", error);
    }

  };

  const handleCloseDepositSuccessModal = () => {
    setIsShowDepositSuccessModal(false);
  }

  const handleWithdraw = async () => {
    setIsShowRiskModal(false);
    try {
      console.log("Withdraw:", amount);
      // Show Toast When Success
      //call withdraw function
      const withdrawTx = await writeContractAsync({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'withdraw',
        args: [parseUnits(amount.toString(), 6), address!, address!],
      });
      setWithdrawHash(withdrawTx);

    } catch (error) {
      console.error('Error in Withdraing: ', error)
    }

  };

  const handleCloseWidthrawSuccessModal = () => {
    setIsShowWidthrawSuccessModal(false);
  }
  // Approve Confirmed
  useEffect(() => {
    const doDeposit = async () => {
      if (!isApproveConfirmed || !address) return;

      try {
        const usdcAmount = parseUnits(amount.toString(), 6);
        console.log(usdcAmount)

        const depositTx = await writeContractAsync({
          address: CONTRACT_ADDRESS,
          abi: CONTRACT_ABI,
          functionName: "deposit",
          args: [usdcAmount, address],
        });

        setDepositHash(depositTx); // triggers wait for confirmation
      } catch (err) {
        toast.error("Deposit failed");
        console.error("Deposit error:", err);
      }
    };

    doDeposit();
  }, [isApproveConfirmed]);
  //Deposit Confirmed
  useEffect(() => {
    if (!isDepositConfirmed) return;

    setIsShowDepositSuccessModal(true);
    refetchInitialBalance();
    refetchAvailableBalance();

    const activity: ActivityData = {
      title: `Deposited ${amount.toString()} USDC`,
      description: "Optimized allocation into AAVE",
      details: `Transaction: ${depositHash}`,
      timestamp: Math.floor(Date.now() / 1000),
    };

    sendActivity(activity);
    toast.success("Deposit confirmed");
  }, [isDepositConfirmed]);

  //withdraw Confirmed
  useEffect(() => {
    if (!isDepositConfirmed) return;

    setIsShowWidthrawSuccessModal(true);
    refetchInitialBalance();
    refetchAvailableBalance();

    const activity: ActivityData = {
      title: `Withdrew ${amount.toString()} USDC`,
      description: 'You withdrew USDC from HyperPool',
      details: `Transaction: ${hash?.toString()}`,
      timestamp: Math.floor(Date.now() / 1000)
    };

    sendActivity(activity);
  }, [isWithdrawConfirmed]);



  return (
    <div className="h-full flex flex-col min-h-0">
      <ToastContainer />
      <PageHeader
        title="Manage Funds"
        showBorder={true}
      />

      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col justify-between min-h-full px-1 py-1 sm:py-3">
          {/* Note Section */}
          <div className="text-theme-primary text-[0.9rem] font-mono mb-3 md:mb-3">
            <p>
              Note: You can only deposit and withdraw{" "}
              <span className="text-primary-orange">Polygon USDC</span>
            </p>
          </div>

          {/* Info Section - Takes up available space */}
          <div className="flex-1 flex flex-col justify-center mb-1 md:mb-3">
            <div className="text-theme-primary text-[0.9rem] space-y-2 md:space-y-4 max-w-md mx-auto w-full">
              <div className="flex items-center gap-3">
                <div className="feature-icon"></div>
                <span>Funds auto-allocated to optimal protocols</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="feature-icon"></div>
                <span>Rebalancing every 4-24 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="feature-icon"></div>
                <span>Gas costs optimized</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-[45%] flex flex-col  items-center compliance-section max-w-md mx-auto p-2 rounded-lg transition-all duration-300 bg-white/5 border border-white/10 text-theme-primary text-[0.9rem] font-mono mb-3 md:mb-1">
              <p>
                Initial: {initialBalance}
              </p>
            </div>
            <div className="w-full md:w-[45%] flex flex-col items-center compliance-section max-w-md mx-auto p-2 rounded-lg transition-all duration-300 bg-white/5 border border-white/10 text-theme-primary text-[0.9rem] font-mono mb-3 md:mb-1">
              <p>
                Available Withdrawal: {available}
              </p>
            </div>
          </div>
          {/* Input and Buttons Section */}
          <div className="space-y-4 md:space-y-6 ">
            <div>
              <label className="block text-theme-primary text-[1rem] font-bold mb-2">
                Amount
              </label>
              <input
                type="number"
                placeholder="0.00"
                className="w-full input-theme "
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            {error && (
              <div>Error: {(error as BaseError).shortMessage || error.message}</div>
            )}
            <div className="flex flex-col items-center compliance-section max-w-md mx-auto p-2 rounded-lg transition-all duration-300 bg-white/5 border border-white/10">
              <label className="flex items-center cursor-pointer space-x-3">
                <input
                  type="checkbox"
                  id="us-person-checkbox"
                  checked={isConnectionRequirementsMet}
                  onChange={handleCheckboxChange}
                  className="w-4 h-4 accent-primary-orange border-gray-300 rounded focus:ring-orange-500 flex-shrink-0"
                />
                <label
                  htmlFor="us-person-checkbox"
                  className="cursor-pointer text-center leading-tight text-[0.8rem] sm:text-[1rem]"

                >
                  I am not a US person and I understand the risks.
                </label>
              </label>



              <div className="mt-1 text-xs text-gray-500">
                U.S regs incoming. Not ready yet...
              </div>
            </div>
            <div className="flex gap-3 hyperpool-btn-container">
              <button className="flex w-full justify-center hyperpool-btn hyperpool-btn--deposit" onClick={handleShowDepositModal} disabled={!isConnectionRequirementsMet} >
                <span>Deposit</span>
              </button>
              <button className="flex w-full justify-center hyperpool-btn hyperpool-btn--withdraw" onClick={handleWithdraw}>
                <span>Withdraw</span>
              </button>
            </div>

            {/* <div className="flex gap-3 ">
              <button type="button" disabled={!isConnectionRequirementsMet} onClick={handleShowDepositModal} className="disabled:pointer-events-none disabled:opacity-50 w-full  flex justify-center text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Deposit</button>
              <button type="button" onClick={handleWithdraw} className="w-full flex justify-center text-white bg-gradient-to-r from-orange-400 to-orange-600 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-orange-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Withdraw</button>
            </div> */}
          </div>
        </div>
      </div>
      {isShowDepositModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="hyper-modal border border-white/20 rounded-lg p-6 ">

            <button className="h-[32px!important] w-[32px!important] fixed top-5 right-5 text-gray-400  text-bold hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseDepositModal}>✕</button>
            <div className="flex flex-col items-center mb-[32px]">
              <svg width="80px" height="80px" viewBox="0 0 128 128" aria-hidden="true" role="img" className="iconify iconify--noto" preserveAspectRatio="xMidYMid meet">

                <path d="M57.16 8.42l-52 104c-1.94 4.02-.26 8.85 3.75 10.79c1.08.52 2.25.8 3.45.81h104c4.46-.04 8.05-3.69 8.01-8.15a8.123 8.123 0 0 0-.81-3.45l-52-104a8.067 8.067 0 0 0-14.4 0z" fill="#f2a600">

                </path>

                <path d="M53.56 15.72l-48.8 97.4c-1.83 3.77-.25 8.31 3.52 10.14c.99.48 2.08.74 3.18.76h97.5a7.55 7.55 0 0 0 7.48-7.62a7.605 7.605 0 0 0-.78-3.28l-48.7-97.4a7.443 7.443 0 0 0-9.93-3.47a7.484 7.484 0 0 0-3.47 3.47z" fill="#ffcc32">

                </path>

                <g opacity=".2" fill="#424242">

                  <path d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.646 4.646 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8">

                  </path>

                  <path d="M64.36 98.02c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6">

                  </path>

                </g>

                <linearGradient id="IconifyId17ecdb2904d178eab21432" gradientUnits="userSpaceOnUse" x1="68" y1="-1808.36" x2="68" y2="-1887.05" gradientTransform="matrix(1 0 0 -1 -3.64 -1776.09)">

                  <stop offset="0" stopColor="#424242">

                  </stop>

                  <stop offset="1" stopColor="#212121">

                  </stop>

                </linearGradient>

                <path d="M64.36 34.02c4.6 0 8.3 3.7 8 8l-3.4 48c-.38 2.54-2.74 4.3-5.28 3.92a4.646 4.646 0 0 1-3.92-3.92l-3.4-48c-.3-4.3 3.4-8 8-8z" fill="url(#IconifyId17ecdb2904d178eab21432)">

                </path>

                <linearGradient id="IconifyId17ecdb2904d178eab21433" gradientUnits="userSpaceOnUse" x1="64.36" y1="-1808.36" x2="64.36" y2="-1887.05" gradientTransform="matrix(1 0 0 -1 0 -1772.11)">

                  <stop offset="0" stopColor="#424242">

                  </stop>

                  <stop offset="1" stopColor="#212121">

                  </stop>

                </linearGradient>

                <circle cx="64.36" cy="104.02" r="6" fill="url(#IconifyId17ecdb2904d178eab21433)">

                </circle>

                <path d="M53.56 23.02c-1.2 1.5-21.4 41-21.4 41s-1.8 3 .7 4.7c2.3 1.6 4.4-.3 5.3-1.8s19.2-36.9 19.9-38.6c.6-1.87.18-3.91-1.1-5.4c-1.3-1.2-2.6-1-3.4.1z" fill="#fff170">

                </path>

                <circle cx="31.36" cy="75.33" r="3.3" fill="#fff170">

                </circle>

              </svg>
              <h2 className="text-[1.5rem] text-white text-center font-bold mb-[12px]">Confirm Your Status</h2>
              <p className="text-[1rem] text-center">Please verify your eligibility to continue</p>

            </div>
            <div className="mb-8">
              <h2 className="text-[1rem] text-center ">Do you confirm you are not a US person?</h2>

            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <button className="flex w-full sm:w-[45%] mb-2 sm:mb-0 justify-center hyperpool-btn hyperpool-btn--deposit" onClick={handleShowRiskModal} >
                <span>Yes</span>
              </button>

              <button className="flex w-full sm:w-[45%] mt-2 sm:mt-0 justify-center hyperpool-btn [background:rgba(255,255,255,0.1)] hover:[box-shadow:0_8px_30px_rgba(255,255,255,0.1)] hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseDepositModal}>
                No
              </button>
            </div>
          </div>
        </div>
      )}

      {isShowDepositSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="hyper-modal border border-white/20 rounded-lg p-6 ">

            <button className="h-[32px!important] w-[32px!important] fixed top-5 right-5 text-gray-400  text-bold hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseDepositSuccessModal}>✕</button>
            <div className="flex flex-col items-center mb-[32px]">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                height={"80px"}
                width={"80px"}
                xmlSpace="preserve"
              >
                <path
                  style={{
                    fill: "#D7EBFF",
                  }}
                  d="M256,512C114.837,512,0,397.157,0,256S114.837,0,256,0s256,114.843,256,256S397.163,512,256,512z"
                />
                <path
                  style={{
                    fill: "#C4E2FF",
                  }}
                  d="M512,256C512,114.843,397.163,0,256,0v512C397.163,512,512,397.157,512,256z"
                />
                <path
                  style={{
                    fill: "#88CC2A",
                  }}
                  d="M256,478.609c-122.75,0-222.609-99.864-222.609-222.609S133.25,33.391,256,33.391 S478.609,133.256,478.609,256S378.75,478.609,256,478.609z"
                />
                <path
                  style={{
                    fill: "#7FB335",
                  }}
                  d="M478.609,256c0-122.744-99.859-222.609-222.609-222.609v445.217 C378.75,478.609,478.609,378.744,478.609,256z"
                />
                <path
                  style={{
                    fill: "#FFFFFF",
                  }}
                  d="M233.739,356.174c-8.544,0-17.087-3.261-23.609-9.783l-68.804-68.804 c-13.044-13.038-13.044-34.179,0-47.218c13.044-13.044,34.174-13.044,47.218,0l45.195,45.19l95.282-95.278 c13.044-13.044,34.174-13.044,47.218,0c13.044,13.038,13.044,34.179,0,47.218L257.348,346.391 C250.827,352.913,242.283,356.174,233.739,356.174z"
                />
                <path
                  style={{
                    fill: "#EDF0F2",
                  }}
                  d="M329.021,180.283L256,253.3v94.192c0.435-0.393,0.928-0.681,1.348-1.101l118.891-118.891 c13.044-13.038,13.044-34.179,0-47.218C363.196,167.239,342.065,167.239,329.021,180.283z"
                />
              </svg>
              <h2 className="text-[1.5rem] text-white text-center font-bold mb-[12px]">Transaction Successful</h2>
              <p className="text-[1rem] text-center">Your transaction has been processed</p>

            </div>
            <div className="mb-8">
              <h2 className="text-[1rem] text-center ">Your funds have been successfully processed and are now being optimized across DeFi protocols.</h2>
            </div>
            <div className="flex justify-center">
              <button className="flex w-[45%] justify-center hyperpool-btn hyperpool-btn--deposit" onClick={handleCloseDepositSuccessModal} >
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {isShowRiskModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="hyper-modal border border-white/20 rounded-lg p-6 ">

            <button className="h-[32px!important] w-[32px!important] fixed top-5 right-5 text-gray-400  text-bold hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseRiskModal}>✕</button>
            <div className="flex flex-col items-center mb-[32px]">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 484.8 484.8"
                width="80px"
                height="80px"
                xmlSpace="preserve"
              >
                <circle
                  style={{
                    fill: "#C42014",
                  }}
                  cx={242.4}
                  cy={242.4}
                  r={242.4}
                />
                <path
                  style={{
                    fill: "#840202",
                  }}
                  d="M0,242.4C0,376,108,484,242.4,484C376,484,484,376,484,242.4"
                />
                <polygon
                  style={{
                    fill: "#EBFFF6",
                  }}
                  points="268,306.4 216.8,306.4 197.6,66.4 287.2,66.4 "
                />
                <polyline
                  style={{
                    fill: "#D6EAE0",
                  }}
                  points="288,64.8 268,306.4 218.4,306.4 "
                />
                <rect
                  x={212.603}
                  y={346.124}
                  transform="matrix(-0.707 0.7072 -0.7072 -0.707 680.122 470.4758)"
                  style={{
                    fill: "#EBFFF6",
                  }}
                  width={59.999}
                  height={59.999}
                />
                <polyline
                  style={{
                    fill: "#D6EAE0",
                  }}
                  points="242.4,334.4 284.8,376.8 242.4,418.4 "
                />
              </svg>
              <h2 className="text-[1.5rem] text-white text-center font-bold mb-[12px]">High Risk Warning</h2>
              <p className="text-[1rem] text-center">Please read carefully before proceeding</p>

            </div>
            <div className="mb-8">

              <div className="mt-4 p-4 [background:rgba(239,68,68,0.1)] [border:1px_solid_rgba(239,68,68,0.3)] rounded-lg">
                <p className="text-[#fca5a5!important] font-medium">
                  You are about to deposit funds into high-risk DeFi protocols. You could lose your entire investment. Smart contracts can be exploited, protocols can fail, and markets can crash. Only invest what you can afford to lose completely.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between">
              <button className="flex w-full sm:w-[45%] mb-2 sm:mb-0  justify-center hyperpool-btn hyperpool-btn--deposit" onClick={handleDeposit} >
                <span>I Understand</span>
              </button>

              <button className="flex w-full sm:w-[45%] mb-2 sm:mb-0  justify-center hyperpool-btn [background:rgba(255,255,255,0.1)] hover:[box-shadow:0_8px_30px_rgba(255,255,255,0.1)] hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseRiskModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isShowWidthrawSuccessModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="hyper-modal border border-white/20 rounded-lg p-6 ">

            <button className="h-[32px!important] w-[32px!important] fixed top-5 right-5 text-gray-400  text-bold hover:text-white bg-gray-600 hover:bg-gray-500 rounded-lg transition-colors" onClick={handleCloseWidthrawSuccessModal}>✕</button>
            <div className="flex flex-col items-center mb-[32px]">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                width={"80px"}
                height={"80px"}
                xmlSpace="preserve"

              >
                <path
                  style={{
                    fill: "#003C61",
                  }}
                  d="M437.02,74.98C388.667,26.628,324.25,0,255.87,0S123.333,26.628,74.98,74.98 C26.628,123.333,0,187.62,0,256s26.628,132.667,74.98,181.02C123.333,485.372,187.49,512,255.87,512s132.797-26.628,181.15-74.98 C485.372,388.667,512,324.38,512,256S485.372,123.333,437.02,74.98z"
                />
                <path
                  style={{
                    fill: "#0066A6",
                  }}
                  d="M255.87,0.003C187.58,0.067,123.275,26.686,74.98,74.98C26.628,123.333,0,187.62,0,256 s26.628,132.667,74.98,181.02c48.295,48.294,112.6,74.915,180.89,74.978V0.003z"
                />
                <path
                  style={{
                    fill: "#005A95",
                  }}
                  d="M398.454,113.546c-38.051-38.052-88.772-59.007-142.584-59.007s-104.273,20.955-142.325,59.007 C75.494,151.597,54.539,202.188,54.539,256s20.955,104.403,59.007,142.454c38.05,38.052,88.511,59.007,142.324,59.007 s104.534-20.955,142.584-59.007c38.052-38.051,59.007-88.642,59.007-142.454S436.506,151.597,398.454,113.546z"
                />
                <path
                  style={{
                    fill: "#31AAEF",
                  }}
                  d="M255.87,54.542c-53.721,0.063-104.331,21.01-142.325,59.004 C75.494,151.597,54.539,202.188,54.539,256s20.955,104.403,59.006,142.454c37.994,37.993,88.603,58.94,142.325,59.004V54.542z"
                />
                <path
                  style={{
                    fill: "#79C6BF",
                  }}
                  d="M225.38,368.767c-10.332,0-20.241-4.105-27.547-11.41l-68.094-68.094 c-15.213-15.213-15.213-39.879,0-55.093c15.214-15.212,39.88-15.213,55.093,0l40.547,40.547l101.936-101.936 c15.214-15.213,39.879-15.213,55.093,0c15.213,15.213,15.213,39.879,0,55.092L252.926,357.357 C245.621,364.663,235.711,368.767,225.38,368.767z"
                />
                <path
                  style={{
                    fill: "#E4F3F6",
                  }}
                  d="M255.87,244.227l-30.491,30.491l-40.547-40.547c-15.213-15.213-39.879-15.213-55.093,0 c-15.213,15.213-15.213,39.879,0,55.093l68.094,68.094c7.306,7.306,17.214,11.41,27.547,11.41c10.331,0,20.241-4.105,27.547-11.41 l2.944-2.944L255.87,244.227L255.87,244.227z"
                />
              </svg>
              <h2 className="text-[1.5rem] text-white text-center font-bold mb-[12px]">Withdrawal Successful</h2>
              <p className="text-[1rem] text-center">Your withdrawal request has been processed</p>

            </div>
            <div className="mb-8">
              <h2 className="text-[1rem] text-center ">Your funds have been successfully withdrawn from the DeFi protocols and are now available in your wallet. Thank you for using our platform.</h2>
            </div>
            <div className="flex justify-center">
              <button className="flex w-[45%] justify-center hyperpool-btn hyperpool-btn--deposit" onClick={handleCloseWidthrawSuccessModal} >
                <span>Continue</span>
              </button>
            </div>
          </div>
        </div>
      )}
      {isDepositing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="hyper-modal border border-white/20 rounded-lg p-6 ">

            <div className="flex flex-col items-center">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 496 496"
                height="80px"
                width="80px"
              >
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M117.6,305.6c-5.6-12.8-9.6-27.2-11.2-42.4H0c2.4,34.4,11.2,66.4,25.6,95.2L117.6,305.6z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M56,263.2c1.6,24,8,47.2,18.4,68l44-25.6c-5.6-12.8-9.6-27.2-11.2-42.4H56z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M232.8,496V389.6c-15.2-1.6-28.8-5.6-42.4-11.2l-52.8,92C166.4,484.8,198.4,493.6,232.8,496z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M164.8,422.4c20.8,9.6,43.2,16,68,18.4v-50.4c-15.2-1.6-28.8-5.6-42.4-11.2L164.8,422.4z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M263.2,0v106.4c15.2,1.6,28.8,5.6,42.4,11.2l52.8-92C329.6,11.2,297.6,2.4,263.2,0z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M263.2,56v50.4c15.2,1.6,28.8,5.6,42.4,11.2l25.6-44C310.4,64,287.2,57.6,263.2,56z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M0,232.8h106.4c1.6-15.2,5.6-28.8,11.2-42.4l-92-52.8C11.2,166.4,2.4,198.4,0,232.8z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M56,232.8h50.4c1.6-15.2,5.6-28.8,11.2-42.4l-44-25.6C64,185.6,57.6,208.8,56,232.8z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M305.6,378.4c-12.8,5.6-27.2,9.6-42.4,11.2V496c34.4-2.4,66.4-11.2,95.2-25.6L305.6,378.4z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M331.2,422.4l-25.6-44c-12.8,5.6-27.2,9.6-42.4,11.2V440C287.2,438.4,310.4,432,331.2,422.4z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M190.4,117.6c12.8-5.6,27.2-9.6,42.4-11.2V0c-34.4,2.4-66.4,11.2-95.2,25.6L190.4,117.6z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M164.8,73.6l25.6,44c12.8-5.6,27.2-9.6,42.4-11.2V56C208.8,57.6,185.6,64,164.8,73.6z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M332,132.8c12,8.8,22.4,19.2,31.2,31.2l92-52.8c-18.4-28-42.4-51.2-69.6-69.6L332,132.8z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M357.6,88.8l-25.6,44c12,8.8,22.4,19.2,31.2,31.2l44-25.6C393.6,119.2,376.8,102.4,357.6,88.8z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M496,263.2H389.6c-1.6,15.2-5.6,28.8-11.2,42.4l92,52.8C484.8,329.6,493.6,297.6,496,263.2z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M422.4,331.2c9.6-20.8,16-43.2,18.4-68h-50.4c-1.6,15.2-5.6,28.8-11.2,42.4L422.4,331.2z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M363.2,332c-8.8,12-19.2,22.4-31.2,31.2l52.8,92c28-18.4,51.2-42.4,69.6-69.6L363.2,332z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M363.2,332c-8.8,12-19.2,22.4-31.2,31.2l25.6,44c19.2-13.6,36-30.4,49.6-49.6L363.2,332z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M164,363.2c-12-8.8-22.4-19.2-31.2-31.2l-92,53.6c18.4,28,42.4,51.2,69.6,69.6L164,363.2z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M132.8,332l-44,25.6c13.6,19.2,30.4,36,49.6,49.6l25.6-44C152,354.4,141.6,344,132.8,332z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M132.8,164c8.8-12,19.2-22.4,31.2-31.2l-53.6-92c-28,18.4-51.2,42.4-69.6,69.6L132.8,164z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M88.8,138.4l44,25.6c8.8-12,19.2-22.4,31.2-31.2l-25.6-44C119.2,102.4,102.4,119.2,88.8,138.4z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M378.4,190.4c5.6,13.6,9.6,27.2,11.2,42.4H496c-2.4-34.4-11.2-66.4-25.6-95.2L378.4,190.4z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M389.6,232.8H440c-1.6-24-8-47.2-18.4-68l-44,25.6C384,203.2,388,217.6,389.6,232.8z"
                />
              </svg>
              <h2 className="text-[1.5rem] mt-6 text-white text-center font-bold mb-[12px]">Your deposit is being processed. Please wait...</h2>
            </div>

          </div>
        </div>
      )}

      {isWithdrawing && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="hyper-modal border border-white/20 rounded-lg p-6 ">

            <div className="flex flex-col items-center">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 496 496"
                height="80px"
                width="80px"
              >
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M117.6,305.6c-5.6-12.8-9.6-27.2-11.2-42.4H0c2.4,34.4,11.2,66.4,25.6,95.2L117.6,305.6z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M56,263.2c1.6,24,8,47.2,18.4,68l44-25.6c-5.6-12.8-9.6-27.2-11.2-42.4H56z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M232.8,496V389.6c-15.2-1.6-28.8-5.6-42.4-11.2l-52.8,92C166.4,484.8,198.4,493.6,232.8,496z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M164.8,422.4c20.8,9.6,43.2,16,68,18.4v-50.4c-15.2-1.6-28.8-5.6-42.4-11.2L164.8,422.4z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M263.2,0v106.4c15.2,1.6,28.8,5.6,42.4,11.2l52.8-92C329.6,11.2,297.6,2.4,263.2,0z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M263.2,56v50.4c15.2,1.6,28.8,5.6,42.4,11.2l25.6-44C310.4,64,287.2,57.6,263.2,56z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M0,232.8h106.4c1.6-15.2,5.6-28.8,11.2-42.4l-92-52.8C11.2,166.4,2.4,198.4,0,232.8z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M56,232.8h50.4c1.6-15.2,5.6-28.8,11.2-42.4l-44-25.6C64,185.6,57.6,208.8,56,232.8z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M305.6,378.4c-12.8,5.6-27.2,9.6-42.4,11.2V496c34.4-2.4,66.4-11.2,95.2-25.6L305.6,378.4z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M331.2,422.4l-25.6-44c-12.8,5.6-27.2,9.6-42.4,11.2V440C287.2,438.4,310.4,432,331.2,422.4z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M190.4,117.6c12.8-5.6,27.2-9.6,42.4-11.2V0c-34.4,2.4-66.4,11.2-95.2,25.6L190.4,117.6z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M164.8,73.6l25.6,44c12.8-5.6,27.2-9.6,42.4-11.2V56C208.8,57.6,185.6,64,164.8,73.6z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M332,132.8c12,8.8,22.4,19.2,31.2,31.2l92-52.8c-18.4-28-42.4-51.2-69.6-69.6L332,132.8z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M357.6,88.8l-25.6,44c12,8.8,22.4,19.2,31.2,31.2l44-25.6C393.6,119.2,376.8,102.4,357.6,88.8z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M496,263.2H389.6c-1.6,15.2-5.6,28.8-11.2,42.4l92,52.8C484.8,329.6,493.6,297.6,496,263.2z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M422.4,331.2c9.6-20.8,16-43.2,18.4-68h-50.4c-1.6,15.2-5.6,28.8-11.2,42.4L422.4,331.2z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M363.2,332c-8.8,12-19.2,22.4-31.2,31.2l52.8,92c28-18.4,51.2-42.4,69.6-69.6L363.2,332z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M363.2,332c-8.8,12-19.2,22.4-31.2,31.2l25.6,44c19.2-13.6,36-30.4,49.6-49.6L363.2,332z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M164,363.2c-12-8.8-22.4-19.2-31.2-31.2l-92,53.6c18.4,28,42.4,51.2,69.6,69.6L164,363.2z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M132.8,332l-44,25.6c13.6,19.2,30.4,36,49.6,49.6l25.6-44C152,354.4,141.6,344,132.8,332z"
                />
                <path
                  style={{
                    fill: "#DFEFEF",
                  }}
                  d="M132.8,164c8.8-12,19.2-22.4,31.2-31.2l-53.6-92c-28,18.4-51.2,42.4-69.6,69.6L132.8,164z"
                />
                <path
                  style={{
                    fill: "#D4E8E7",
                  }}
                  d="M88.8,138.4l44,25.6c8.8-12,19.2-22.4,31.2-31.2l-25.6-44C119.2,102.4,102.4,119.2,88.8,138.4z"
                />
                <path
                  style={{
                    fill: "#1BCEB8",
                  }}
                  d="M378.4,190.4c5.6,13.6,9.6,27.2,11.2,42.4H496c-2.4-34.4-11.2-66.4-25.6-95.2L378.4,190.4z"
                />
                <path
                  style={{
                    fill: "#0DBFBA",
                  }}
                  d="M389.6,232.8H440c-1.6-24-8-47.2-18.4-68l-44,25.6C384,203.2,388,217.6,389.6,232.8z"
                />
              </svg>
              <h2 className="text-[1.5rem] mt-6 text-white text-center font-bold mb-[12px]">Your withdrawal is being processed. Please wait...</h2>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default ManageFunds;
