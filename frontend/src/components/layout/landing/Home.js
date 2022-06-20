import react, { useState } from "react";
import { Button, Card, CardBody, Col, Container } from "react-bootstrap";
import Register from "../../auth/Register";
import Login from "../../auth/Login"

import "./landing.css"
import Navigationbar from "../../nav/Navigationbar";

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
       <Navigationbar colour="dodgerblue" />
      <Col style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <h1 className="bienvenue">Bienvenue Dans la Platforme De <br/> Régie Nationale Des Alcools</h1>

        <Button className="cnxbtn">Se connecter</Button>
      </Col>
    </Container>
  );
};

export default Home;
