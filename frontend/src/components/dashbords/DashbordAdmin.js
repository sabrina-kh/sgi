import { Col, Container, Row } from 'react-bootstrap'
import Sidebar from './Sidebar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import GraphAdmin from './GraphAdmin'

const DashboardAdmin = () => {

    const [showDrawer, setShowDrawer] = useState(false)

    const toggleDrawer = () => {
      setShowDrawer(!showDrawer)
    }
  return (
    <Container>
        <Row>
            <Col>
            <Link
            to='#'
            className='navbar-brand toggler'
            style={{ fontFamily: ['Oswald'], fontSize: '4rem', color: 'white' }}
            onMouseDown={toggleDrawer}
          >
            <i className="fa fa-solid fa-align-left toggler"></i>
          </Link>
            <Sidebar width={25} onHide={() => setShowDrawer(false)} show={showDrawer}/>
            </Col>
        </Row>
        <Row className='px-5 py-5'>
            <h1 className='text-center my-4' style={{ color: 'white' }}>Variation mensuelle de taux des comandes et des clients</h1>
            <GraphAdmin />
        </Row>
    </Container>
  )
}

export default DashboardAdmin