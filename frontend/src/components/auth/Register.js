import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./auth.css";
import Input from "./Input";

export default function Register() {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center py-3 title">
        Créer Compte Admin
      </Row>
      <Row className="justify-content-between">
        <Col>
          <Input
            type="text"
            placeholder="Nom de famille"
            icon="user"
            value={null}
            name="lastName"
          />
          <Input
            type="text"
            placeholder="Nom"
            icon="user"
            value={null}
            name="firstName"
          />
          <Input
            type="text"
            placeholder="Société"
            icon="building-columns"
            value={null}
            name="company"
          />
        </Col>
        <Col>
          <Input
            type="email"
            placeholder="Adresse E-mail"
            icon="envelope"
            value={null}
            name="lastName"
          />
          <Input
            type="password"
            placeholder="Mot de Passe"
            icon="lock"
            value={null}
            name="lastName"
          />
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col className="d-flex justify-content-center">
          <Button className="cnxbtn">Retour</Button>
          <Button className="cnxbtn">Valider</Button>
        </Col>
      </Row>
    </Container>
  );
}
