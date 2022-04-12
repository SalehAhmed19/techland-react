import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useData from "../../Hooks/useData";
import "./MyBarChart.css";

const MyBarChart = () => {
  const [data, setData] = useData();
  return (
    <div className="bar-chart">
      <h2 className="font-bold text-xl text-center text-orange-500">
        INVESTMENT vs REVENUE
      </h2>
      <BarChart width={350} height={220} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="investment" fill="#F87315" />
        <Bar dataKey="revenue" fill="#82ca9d" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </BarChart>
    </div>
  );
};

export default MyBarChart;
