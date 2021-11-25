import React from "react";
import { Table } from "antd";
import { formatDate } from "../utility/Date";
import StatusTag from "./StatusTag";

const TableView = ({ notifications }) => {
  const filterHandler = (value, record, key) => record[key] === value;

  const columns = [
    {
      title: "Subject",
      dataIndex: "commit_subject",
    },
    {
      title: "Commit Author",
      dataIndex: "commit_author",
    },
    {
      title: "Happened At",
      dataIndex: "happened_at",
      render: (text) => formatDate(text),
    },
    {
      title: "Event Type",
      dataIndex: "type",
      filters: [
        { text: "Job", value: "job-completed" },
        { text: "Workflow", value: "workflow-completed" },
      ],
      onFilter: (value, record) => filterHandler(value, record, "type"),
    },
    {
      title: "Event Status",
      dataIndex: "event_status",
      filters: [
        { text: "Success", value: "success" },
        { text: "Failed", value: "failed" },
        { text: "Error", value: "error" },
        { text: "Canceled", value: "canceled" },
        { text: "Unauthorized", value: "unauthorized" },
      ],
      render: (text) => <StatusTag status={text} />,
      onFilter: (value, record) => filterHandler(value, record, "event_status"),
    },
    {
      title: "Notification ID",
      dataIndex: "notification_id",
      render: (text, record) => (
        <a href={record["workflow_url"]} target="_blank" rel="noreferrer">
          {text}
        </a>
      ),
    },
  ];

  return (
    <Table dataSource={notifications} columns={columns} rowKey="id" bordered />
  );
};

export default TableView;
