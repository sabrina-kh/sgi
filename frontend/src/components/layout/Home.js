import react, { useState } from "react";
import { Button, Card, CardBody, Col, Container } from "react-bootstrap";
import Logo from "../../resources/logo_company.jpg"
import Register from "../auth/Register";
import Login from "../../components/auth/Login"

const Home = () => {
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBlock: "10%",
        paddingInline: 0,
        marginInline: 0,
      }}
      fluid
    >
      <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={Logo} alt="" />
        <br />
        <h6>Bienvenue Dans la Platforme De Régie Nationale Des Alcools</h6>
      </Col>
      <Col  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Login />
      </Col>
    </Container>
  );
};

export default Home;
