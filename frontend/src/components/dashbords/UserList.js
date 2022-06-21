import React, { useState } from 'react'
import { Tab, Tabs, Sonnet, Card, Col, Row, Nav } from 'react-bootstrap';
import ClientList from './ClientList'

const UserList = () => {
  const [key, setKey] = useState('home');
  return (
		<Card
			style={{
				backgroundColor: 'white',
				margin: '5% 0 0',
				padding: '5% 5% 0',
				//height: '100%',
			}}
		>
			<Tab.Container id="left-tabs-example" defaultActiveKey="first">
				<Row>
					<Col sm={3}>
						<Nav variant="pills" className="flex-column">
							<Nav.Item>
								<Nav.Link eventKey="first">Clients</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="second">Responsables du Vente</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="third">Responsables du Stock</Nav.Link>
							</Nav.Item>
							<Nav.Item>
								<Nav.Link eventKey="fourth">Responsables du Règlement</Nav.Link>
							</Nav.Item>
							<Nav.Item
								style={{
									backgroundColor: 'blue',
									color: 'white',
									borderRadius: '20px',
								}}
								className="my-5"
							>
								<Nav.Link
									eventKey="fifth"
									style={{
										backgroundColor: 'blue',
										color: 'white',
										borderRadius: '20px',
									}}
								>
									+ Ajouter
								</Nav.Link>
							</Nav.Item>
						</Nav>
					</Col>
					<Col sm={9}>
						<Tab.Content>
							<Tab.Pane eventKey="first">
								<div className='px-4 py-4' style={{ fontSize: '0.8rem', height: '100vh' }}><ClientList /></div>
							</Tab.Pane>
							<Tab.Pane eventKey="second">
								<p>paragraph 2</p>
							</Tab.Pane>
							<Tab.Pane eventKey="third">
								<p>paragraph 3</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<p>paragraph 4</p>
							</Tab.Pane>
							<Tab.Pane eventKey="fourth">
								<p>paragraph 5</p>
							</Tab.Pane>
						</Tab.Content>
					</Col>
				</Row>
			</Tab.Container>
		</Card>
	);
}

export default UserList