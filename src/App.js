import "./App.css";
import { makeGETRequest } from "./utility/API";
import { useEffect, useState } from "react";
import { Card, Col, Row, Switch } from "antd";
import TableView from "./components/TableView";
import ChartView from "./components/ChartView";

const App = () => {
  const [notifications, setNotifications] = useState([]);
  const [showTableView, setShowTableView] = useState(false);

  useEffect(() => {
    makeGETRequest("http://127.0.0.1:8000/api/circleci").then((response) => {
      setNotifications(response);
      console.log(response);
    });
  }, []);

  const handleSwitchValueChange = () => {
    setShowTableView((showTableView) => !showTableView);
  };

  return (
    <Card style={{ margin: "2%" }}>
      <Row style={{ marginBottom: "10px" }}>
        <Col span={6} offset={18}>
          Show Data as Table
          <Switch checked={showTableView} onChange={handleSwitchValueChange} />
        </Col>
      </Row>
      {showTableView ? (
        <TableView notifications={notifications} />
      ) : (
        <ChartView notifications={notifications} />
      )}
    </Card>
  );
};

export default App;
