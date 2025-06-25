import React from "react";
import DashboardContent from "./DashboardContent";

type Token = "USDC" | "DAI" | "USDT" | "ETH";

interface FormData {
  token: Token;
  amount: string;
}

interface ManageFundsCardProps {
  readonly formData: FormData;
  readonly isSubmitting: boolean;
  readonly onTokenChange: (token: Token) => void;
  readonly onAmountChange: (amount: string) => void;
  readonly onDeposit: (event: React.FormEvent) => void;
  readonly onWithdraw: (event: React.FormEvent) => void;
  readonly height?: "sm" | "md" | "lg" | "xl" | "2xl";
}

const ManageFundsCard: React.FC<ManageFundsCardProps> = ({
  formData,
  isSubmitting,

  onAmountChange,
  onDeposit,
  onWithdraw,
  height = "lg",
}) => {
  return (
    <DashboardContent height={height}>
      <div className="w-full flex flex-col h-full">
        <div className="text-theme-quaternary">Manage Funds</div>
        <br />

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div>
            <span className="text-primary-orange">Stake USDC</span>
          </div>

          <div>
            <label className="block text-theme-primary text-sm font-medium mb-2">
              Amount
            </label>
            <input
              type="number"
              placeholder="0.00"
              className="w-full input-theme px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              value={formData.amount}
              onChange={(e) => onAmountChange(e.target.value)}
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              className="flex-1 btn-quaternary font-semibold py-2 px-4 rounded flex items-center justify-center gap-2"
              onClick={onDeposit}
              disabled={isSubmitting}
            >
              Deposit
            </button>
            <button
              type="button"
              className="flex-1 btn-tertiary font-semibold py-2 px-4 rounded"
              onClick={onWithdraw}
              disabled={isSubmitting}
            >
              Withdraw
            </button>
          </div>
        </form>

        <ul className="mt-6 space-y-2 text-white text-sm">
          <li className="flex items-start gap-2">
            <span className="text-theme-primary mt-1">•</span>
            <span>Funds are automatically allocated to optimal protocols</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-theme-primary mt-1">•</span>
            <span>Rebalancing happens every 4-24 hours based on risk tier</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-theme-primary mt-1">•</span>
            <span>Gas costs are optimized for maximum efficiency</span>
          </li>
        </ul>
      </div>
    </DashboardContent>
  );
};

export default ManageFundsCard;
