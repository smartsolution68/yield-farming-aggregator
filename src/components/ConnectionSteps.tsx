import React from "react";

type Step = {
  readonly number: number;
  readonly title: string;
};

type ConnectionStepsProps = {
  readonly className?: string;
};

const steps: readonly Step[] = [
  { number: 1, title: "Connect" },
  { number: 2, title: "Drop USDC" },
  { number: 3, title: "Auto-Farm" },
] as const;

const renderStep = (step: Step, index: number): React.ReactElement => (
  <React.Fragment key={index}>
    <span className="text-[0.8rem] sm:text-xs text-white">
      {step.number}. {step.title}
    </span>
    
  </React.Fragment>
);

const ConnectionSteps = ({
  className = "",
}: ConnectionStepsProps): React.ReactElement => (
  <div className={`${className}`}>
  <div className="flex flex-col sm:text-center sm:flex-wrap sm:flex-row text-left text-[1rem] leading-relaxed gap-y-1 sm:gap-x-3 sm:gap-y-0">
      {steps.map((step, index) => renderStep(step, index))}
    </div>
  </div>
);

export default ConnectionSteps;
