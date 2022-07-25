import React from "react";
import SingleDashboard from "../SingleDashboard";
import { Check, Chart, Bill, Question, Heart } from "./../../svg/svg";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <div className="dashboard-info">
        <p>Dashboard</p>
        <div>
          <Heart />
          <p>ADD THIS PAGE TO FAVORITES</p>
        </div>
      </div>
      <div className="dashboard-wrapper">
        <SingleDashboard data="25" info="SIGNUPS">
          <Check />
        </SingleDashboard>
        <SingleDashboard data="$1000" info="PROFIT">
          <Chart fill="#1F7BB6" />
        </SingleDashboard>
        <SingleDashboard data="$350" info="COMMISSIONS">
          <Bill fill="#FBCF71" />
        </SingleDashboard>
        <SingleDashboard data="$300" info="PENDING COMMISSION">
          <Question fill="#01AAAA" />
        </SingleDashboard>
      </div>
    </>
  );
}

export default Dashboard;
