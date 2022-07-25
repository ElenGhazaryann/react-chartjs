import React from "react";
import "./SingleDashboard.css";
import classNames from "classnames";

function SingleDashboard({ data, info, children }) {
  
  const dataClassName = classNames("data-wrapper", {
    blue: info === "PROFIT",
    green: info === "SIGNUPS" || "PENDING COMMISION",
    yellow: info === "COMMISSIONS",
  });

  return (
    <div className="singleDashboard-wrapper">
      <div className={dataClassName}>{data}</div>
      <div className="dash-children-wrapper">
        {children} <span>{info}</span>
      </div>
    </div>
  );
}

export default SingleDashboard;
