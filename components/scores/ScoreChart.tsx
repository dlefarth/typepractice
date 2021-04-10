import dynamic from "next/dynamic";
import React from "react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ScoreChart: React.FC<{ data: any[] }> = ({ data }) => {
  const series = [
    {
      name: "scores",
      data: data.map((it) => it.score),
    },
  ];

  const options = { chart: { zoom: { enabled: false } } };

  return <Chart type="line" height="250px" series={series} options={options} />;
};

export default ScoreChart;
