import React from "react";
import { Chart as chartjs } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { defData } from "../../data";
import "./LineComp.css";

function LineComp() {
  const data = {
    labels: ["", "", "", "", "", "", ""],
    datasets: [
      {
        data: defData.d1.data.map((data) => data),
        label: defData.d1.labelLine,
        backgroundColor: defData.d1.color,
        borderColor: defData.d1.color,
        tension: 0.3,
        radius: 1,
        borderWidth: 1.5,
      },
      {
        data: defData.d2.data.map((data) => data),
        label: defData.d2.labelLine,
        backgroundColor: defData.d2.color,
        borderColor: defData.d2.color,
        tension: 0.3,
        radius: 1,
        borderWidth: 1.5,
      },
      {
        data: defData.d3.data.map((data) => data),
        backgroundColor: defData.d3.color,
        borderColor: defData.d3.color,
        label: defData.d3.labelLine,
        tension: 0.3,
        radius: 1,
        borderWidth: 1.5,
      },
    ],
  };

  const options = {
    plugins: {
      title: {
        display: true,
        text: "Medias Staats",
        align: "start",
        color: "#C7C7C7",
        font: {
          size: 18,
        },
      },
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          color: "#C7C7C7",
          boxWidth: 10,
          boxHeight: 10,
        },
      },
    },
  };

  return (
    <div className="line-wrapper">
      <Line data={data} options={options} />
      <div>
        <select>
          <option>Last week</option>
        </select>
      </div>
    </div>
  );
}

export default LineComp;
