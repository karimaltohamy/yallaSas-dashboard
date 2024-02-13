import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./chart.scss";

const ProgressLine = ({ percentage }) => {
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [percentage, 100 - percentage], // Example values, adjust as needed
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(169, 169, 169, 0.2)",
        ], // Gray background for the Remaining portion
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(169, 169, 169, 0.2)"],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={data} className="!w-full !h-full" />;
};

export default ProgressLine;
