import React from "react";
import { Tag } from "antd";

const StatusTag = ({ status }) => {
  const statusColours = {
    success: "green",
    failed: "volcano",
    error: "red",
    canceled: "orange",
    unauthorized: "magenta",
  };
  return <Tag color={statusColours[status]}>{status}</Tag>;
};

export default StatusTag;
