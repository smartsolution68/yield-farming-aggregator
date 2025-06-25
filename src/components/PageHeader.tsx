import React from "react";

interface PageHeaderProps {
  readonly title: string;
  readonly subtitle?: string;
  readonly showBorder?: boolean;
  readonly className?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  showBorder = false,
  className = "",
}) => {
  const containerClass = showBorder ? "border-b border-primary-blue pb-2" : "";

  return (
    <div className={`${containerClass} ${className}`}>
      <div className="text-primary-orange font-mono text-[1.5rem] font-bold">
        {title}
      </div>
   
    </div>
  );
};

export default PageHeader;
