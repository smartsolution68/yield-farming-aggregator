"use client";

import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";
import { AllocationItem } from "../types";

interface PortfolioAllocationProps {
  allocationData: AllocationItem[] | null;
}

const formatCurrency = (value: number): string =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(value);

const createDonutChart = (
  svgElement: SVGSVGElement,
  data: readonly AllocationItem[],
  isMobile: boolean = false
): void => {
  console.log("Creating donut chart with data:", data);

  const width = isMobile ? 200 : 300;
  const height = isMobile ? 200 : 300;
  const margin = isMobile ? 15 : 25;
  const radius = Math.min(width, height) / 2 - margin;
  const innerRadius = radius * 0.6;

  // Clear previous content
  d3.select(svgElement).selectAll("*").remove();

  const svg = d3.select(svgElement).attr("width", width).attr("height", height);

  const g = svg
    .append("g")
    .attr("transform", `translate(${width / 2}, ${height / 2})`);

  // Ensure we have valid data
  const validData = data.filter((item) => item.value > 0);
  console.log("Valid data for chart:", validData);

  if (validData.length === 0) {
    console.warn("No valid data for donut chart");
    return;
  }

  const pie = d3
    .pie<AllocationItem>()
    .value((d) => d.value)
    .sort(null);

  const arc = d3
    .arc<d3.PieArcDatum<AllocationItem>>()
    .innerRadius(innerRadius)
    .outerRadius(radius)
    .cornerRadius(isMobile ? 2 : 4);

  const pieData = pie(validData);
  console.log("Pie data:", pieData);

  const arcs = g
    .selectAll(".arc")
    .data(pieData)
    .enter()
    .append("g")
    .attr("class", "arc");

  arcs
    .append("path")
    .attr("d", arc)
    .attr("fill", (d) => d.data.color)
    .attr("stroke", "rgba(255, 255, 255, 0.1)")
    .attr("stroke-width", isMobile ? 1 : 2)
    .style("opacity", 0.9)
    .transition()
    .duration(750)
    .attrTween("d", function (d) {
      const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function (t) {
        return arc(interpolate(t)) || "";
      };
    });
};

const PortfolioAllocation: React.FC<PortfolioAllocationProps> = ({
  allocationData,
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    console.log(
      "Chart useEffect triggered with allocationData:",
      allocationData
    );

    if (svgRef.current) {
      if (allocationData && allocationData.length > 0) {
        console.log("Creating chart with data:", allocationData);
        createDonutChart(svgRef.current, allocationData, isMobile);
      } else {
        console.log("Clearing chart - no valid data");
        d3.select(svgRef.current).selectAll("*").remove();
      }
    } else {
      console.warn("SVG ref not available");
    }
  }, [allocationData, isMobile]);

  console.log("allocationData", allocationData);

  if (!allocationData) {
    return <div>No data available</div>;
  }

  return (
    <div
      ref={containerRef}
      className="flex flex-col lg:flex-row items-center gap-4 md:gap-6 lg:gap-8 w-full h-full"
    >
      {/* Donut Chart */}
      <div className="flex-shrink-0">
        <svg ref={svgRef} className="drop-shadow-lg" />
      </div>

      {/* Legend */}
      <div className="flex-1 space-y-3 md:space-y-4 min-w-0 w-full lg:w-auto">
        {allocationData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-white font-medium text-sm md:text-base truncate">
                {item.name}
              </span>
            </div>
            <span className="text-theme-primary font-semibold text-sm md:text-base flex-shrink-0">
              {formatCurrency(item.value)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioAllocation;
