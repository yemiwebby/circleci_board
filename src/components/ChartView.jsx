import React from "react";
import StatusDistribution from "./StatusDistribution";
import { Col, Row } from "antd";
import TypeDistribution from "./TypeDistribution";
import Timeline from "./Timeline";

const ChartView = ({ notifications }) => {
  return (
    <>
      <Timeline notifications={notifications} />
      <Row style={{ marginTop: "30px" }} gutter={96}>
        <Col>
          <StatusDistribution notifications={notifications} />
        </Col>
        <Col offset={6}>
          <TypeDistribution notifications={notifications} />
        </Col>
      </Row>
    </>
  );
};

export default ChartView;
