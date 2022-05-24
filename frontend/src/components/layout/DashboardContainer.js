import React, { Fragment } from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'
import DashboardDetails from './DashboardDetails'

const DashboardContainer = () => {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col style={{ backgroundColor: 'darkblue', height: '100%', position: 'fixed', width: '20%' }}>
            <Nav defaultActiveKey='/home' className='flex-column' style={{ fontSize: '1.25rem', padding: '20% 5%', fontWeight: 'bold', color: 'white' }}>
              <Nav.Item href='#' style={{ marginBlock: '10%', whiteSpace: 'nowrap', color: 'yellow' }}><i className="fa fa-solid fa-gauge mx-3"></i>Vue d'Ensemble</Nav.Item>
              <Nav.Item href='#' style={{ marginBlock: '10%' }}><i className="fa fa-solid fa-gear mx-3"></i>Paramètres</Nav.Item>
              <Nav.Item href='#' style={{ marginBlock: '10%' }}><i className="fa fa-solid fa-users mx-3"></i>Comptes</Nav.Item>
              <Nav.Item href='#' style={{ marginBlock: '10%' }}>
              <i className="fa fa-solid fa-store mx-3"></i>Inventaire
              </Nav.Item>
            </Nav>
          </Col>
          <Col><DashboardDetails /></Col>
        </Row>
      </Container>
    </Fragment>
  )
}

export default DashboardContainer
