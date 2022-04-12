import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import useData from "../../Hooks/useData";
import "./MyAreaChart.css";

const MyAreaChart = () => {
  const [data, setData] = useData();
  return (
    <div className="area-chart">
      <h2 className="font-bold text-xl text-center text-orange-500">
        INVESTMENT vs REVENUE
      </h2>
      <div>
        <AreaChart height={220} width={350} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey={"investment"}
            stroke="#ffc658"
            fill="#ffc658"
          />
          <XAxis dataKey={"month"} />
          <Area
            type="monotone"
            dataKey={"revenue"}
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <YAxis />
          <Tooltip />
        </AreaChart>
      </div>
    </div>
  );
};

export default MyAreaChart;
