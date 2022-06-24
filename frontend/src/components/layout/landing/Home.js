import react, { useState } from "react";
import { Button, Card, CardBody, Col, Container } from "react-bootstrap";
import Register from "../../auth/Register";
import Login from "../../auth/Login";

import "./landing.css";
import Navigationbar from "../../nav/Navigationbar";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory()
  return (
    <Container
      style={{
       // display: "flex",
        //flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
       // paddingBlock: "10%",
        paddingInline: 0,
        marginInline: 0,
      }}
      fluid
    >
      <Navigationbar colour="dodgerblue" />
      <Container style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", marginBlock: '10%' }}>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <h1 className="bienvenue">
            Bienvenue Dans la Platforme De <br /> Régie Nationale Des Alcools
          </h1>

          <Button className="cnxbtn" onClick={() => history.push('/login')}>Se connecter</Button>
        </Col>
      </Container>
    </Container>
  );
};

export default Home;
