import React, { useState } from 'react'
import { Tab, Tabs, Sonnet, Card, Col, Row, Nav } from 'react-bootstrap'
import ClientList from './ClientList'
import RespVenteList from './RespVenteList'
import RespStockList from './RespStockList'
import RespReglementList from './RespReglementList'
import DashboardAdmin from '../DashbordAdmin'
import UserForm from './UserForm'

const UserList = () => {
  const [key, setKey] = useState('home')
  const [userFormContainer, setUserFormContainer] = useState(false)
  return (
    <div className='px-5 py-5'>
      {/* <DashboardAdmin /> */}
      <Card
        style={{
          backgroundColor: 'white',
          margin: '5% 0 0',
          padding: '5% 5% 0',
          //height: '100%',
          zIndex: 10
        }}
      >
        <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Clients</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Responsables du Vente</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Responsables du Stock</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>
                    Responsables du Règlement
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item
                  style={{
                    backgroundColor: 'blue',
                    color: 'white',
                    borderRadius: '20px'
                  }}
                  className='my-5'
                >
                  <Nav.Link
                    eventKey='fifth'
                    style={{
                      backgroundColor: 'blue',
                      color: 'white',
                      borderRadius: '20px'
                    }}
                    onClick={() => setUserFormContainer(true)}
                  >
                    + Ajouter
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <div
                    className='px-4 py-4'
                    style={{ fontSize: '0.8rem', height: '100vh' }}
                  >
                    <ClientList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <div
                    className='px-4 py-4'
                    style={{ fontSize: '0.8rem', height: '100vh' }}
                  >
                    <RespVenteList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
								<div
                    className='px-4 py-4'
                    style={{ fontSize: '0.8rem', height: '100vh' }}
                  >
                    <RespStockList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
								<div
                    className='px-4 py-4'
                    style={{ fontSize: '0.8rem', height: '100vh' }}
                  >
                    <RespReglementList />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <div>{userFormContainer && <UserForm />}</div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Card>
    </div>
  )
}

export default UserList
