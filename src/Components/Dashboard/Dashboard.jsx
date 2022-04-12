import React from "react";
import MyAreaChart from "../MyAreaChart/MyAreaChart";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";

const Dashboard = () => {
  return (
    <div>
      <div className="grid md:grid-cols-2 gap-4 w-4/5 md:mx-auto md:mt-5">
        <MyLineChart></MyLineChart>
        <MyAreaChart></MyAreaChart>
        <MyBarChart></MyBarChart>
      </div>
    </div>
  );
};

export default Dashboard;
