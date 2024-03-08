import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import "./chart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartPie = ({ data }) => {
  return <Pie data={data} />;
};

export default ChartPie;
