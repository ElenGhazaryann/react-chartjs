import "./DoughnutComp.css";
import React from "react";
import { Chart as chartjs } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { defData } from "./../../data";

function DoughnutComp() {
  const data = {
    labels: [
      defData.d1.labelDonut,
      defData.d2.labelDonut,
      defData.d3.labelDonut,
    ],
    datasets: [
      {
        rotation: 185,
        borderWidth: 0,
        data: [80, 50, 32],
        backgroundColor: [defData.d1.color, defData.d2.color, defData.d3.color],
      },
    ],
  };
  const options = {
    responsive: true,
    elements: {
      center: {
        text: "50",
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Active Medias",
        align: "start",
        color: "#C7C7C7",
        font: {
          size: 18,
        },
      },
      legend: {
        title: {
          padding: {
            top: 10,
          },

          display: true,
          text: "CTR       25%",
          color: "#C7C7C7",
        },
        position: "bottom",
        labels: {
          color: "#C7C7C7",
          boxWidth: 10,
          boxHeight: 10,
          usePointStyle: true,
        },
      },
    },
  };
  return (
    <div className="activeMedias-wrapper">
      <Doughnut data={data} options={options} />
      <div>50</div>
    </div>
  );
}

export default DoughnutComp;
