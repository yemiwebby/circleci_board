import React from "react";
import { Bar } from "react-chartjs-2";

const TypeDistribution = ({ notifications }) => {
  const sortedNotifications = notifications.reduce(
    (sortedNotifications, notification) => {
      sortedNotifications[notification["type"]]++;
      return sortedNotifications;
    },
    { "job-completed": 0, "workflow-completed": 0 }
  );

  const data = {
    labels: ["Job", "Workflow"],
    datasets: [
      {
        label: "Event Type",
        data: Object.values(sortedNotifications),
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(75, 192, 192, 0.2)"],
        borderColor: ["rgba(54, 162, 235, 1)", "rgba(75, 192, 192, 1)"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Type Distribution</h1>
      </div>
      <Bar data={data} options={options} height={500} />
    </>
  );
};

export default TypeDistribution;
