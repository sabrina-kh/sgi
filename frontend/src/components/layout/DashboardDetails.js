import React, { Fragment } from "react";
import { Container, Row } from "react-bootstrap";
import StatsChart from "./dashboard/StatsChart";
import StatsTable from "./dashboard/StatsTable";

const DashboardDetails = () => {
  return (
    <Container
      style={{
        position: "relative",
        display: "flex",
        height: "100%",
        paddingBlock: "3%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Row>
        <StatsTable />
      </Row>
      <Row>
        <StatsChart />
      </Row>
    </Container>
  );
};

export default DashboardDetails;
