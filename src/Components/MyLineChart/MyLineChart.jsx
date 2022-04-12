import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import useData from "../../Hooks/useData";
import "./MyLineChart.css";

const MyLineChart = () => {
  const [data, setData] = useData();
  return (
    <div className="line-chart">
      <h2 className="font-bold text-xl text-center text-orange-500">
        MONTH WISE SELL
      </h2>
      <LineChart type="monotone" width={350} height={220} data={data}>
        <Line
          type="monotone"
          dataKey={"sell"}
          stroke="#F87315"
          strokeWidth={2}
        ></Line>
        <XAxis dataKey={"month"} />
        <YAxis />
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
