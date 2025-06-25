"use client";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";

// Import Chart dynamically to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type YieldDataPoint = {
  time: string;
  steady: number;
  growth: number;
  surge: number;
};
interface YieldPerformanceGraphProps {
  yieldData: YieldDataPoint[];
}

const YieldPerformanceGraph: React.FC<YieldPerformanceGraphProps> = ({
  yieldData,
}) => {
  // ✅ Your new JSON data

  // ✅ Transform to ApexCharts format: { x, y }
  const data = yieldData.map((item) => ({
    x: item.time,
    y: item.steady,
  }));

  // ✅ Chart options
  const options: ApexOptions = {
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#465FFF"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      height: 335,
      id: "area-datetime",
      type: "area",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "straight",
      width: [1], // Fixed width array
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "datetime",
      tickAmount: 10,
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tooltip: {
        enabled: false, // Changed to correct property
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    fill: {
      type: "gradient", // Explicitly set the type for gradient
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      title: {
        text: "", // Ensure no title text
        style: {
          fontSize: "0px", // Correct style application
        },
      },
    },
  };

  const series = [
    {
      name: "Yield",
      data: data,
    },
  ];

  return (
    <div className="h-full max-w-full overflow-x-auto custom-scrollbar">
        <div id="chartEight" className="min-w-[1000px] min-h-100% 2xl:min-w-full">
          <Chart options={options} series={series} type="area" height={400} />
        </div>
    </div>
  );
}
export default YieldPerformanceGraph;