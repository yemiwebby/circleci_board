import React from "react";
import { Pie } from "react-chartjs-2";

const StatusDistribution = ({ notifications }) => {
  const sortedNotifications = notifications.reduce(
    (sortedNotifications, notification) => {
      sortedNotifications[notification["event_status"]]++;
      return sortedNotifications;
    },
    { error: 0, failed: 0, success: 0, unauthorized: 0, canceled: 0 }
  );

  const data = {
    labels: ["Error", "Failed", "Success", "Unauthorized", "Canceled"],
    datasets: [
      {
        data: Object.values(sortedNotifications),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Status Distribution</h1>
      </div>
      <Pie data={data} height={50} />
    </>
  );
};

export default StatusDistribution;
