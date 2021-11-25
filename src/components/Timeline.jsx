import React from "react";
import { Line } from "react-chartjs-2";
import { formatDate } from "../utility/Date";

const Timeline = ({ notifications }) => {
  const sortedNotifications = notifications.reduce(
    (sortedNotifications, notification) => {
      const notificationDate = formatDate(notification["happened_at"]);
      if (notificationDate in sortedNotifications) {
        sortedNotifications[notificationDate]++;
      } else {
        sortedNotifications[notificationDate] = 1;
      }
      return sortedNotifications;
    },
    {}
  );

  const data = {
    labels: Object.keys(sortedNotifications),
    datasets: [
      {
        label: "Number of events",
        data: Object.values(sortedNotifications),
        fill: false,
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgba(255, 99, 132, 0.2)",
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
        <h1 className="title">Event Timeline</h1>
      </div>
      <Line data={data} options={options} height={500} width={1500} />
    </>
  );
};

export default Timeline;
