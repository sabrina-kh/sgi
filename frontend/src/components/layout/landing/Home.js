import react, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container } from "react-bootstrap";
import Register from "../../auth/Register";
import Login from "../../auth/Login";

import "./landing.css";
import Navigationbar from "../../nav/Navigationbar";
import { Redirect, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUserData } from "../../../store/actions/auth.action";

const Home = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(({ auth }) => auth.isAuthenticated);
	const userData = useSelector(({ auth }) => auth.userData);

	if (isAuthenticated) {
		switch (userData?.userType) {
			case 'ADMIN':
				return <Redirect to="/dashboard" />;
			case 'CLIENT':
				return <Redirect to="/dashboard/client" />;
			case 'RESP_VENTE':
				return <Redirect to="/dashboard/respvente" />;
			case 'RESP_STOCK':
				return <Redirect to="/dashboard/respstock" />;
			case 'RESP_REGLEMENT':
				return <Redirect to="/dashboard/respreglement" />;
			default:
				return <Redirect to="/" />;
		}
	}

  return (
    <Container
      style={{
       // display: "flex",
        //flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
       // paddingBlock: "10%",
       height: '100vh',
        paddingInline: 0,
        //marginInline: 0,
      }}
     
    >
      <Navigationbar colour="dodgerblue" />
      <Container style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "center", marginBlock: '10%'}}>
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
