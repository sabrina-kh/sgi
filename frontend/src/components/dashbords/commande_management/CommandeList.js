import React, { useState } from 'react';
import { Tab, Tabs, Sonnet, Card, Col, Row, Nav } from 'react-bootstrap';
import DashboardAdmin from '../DashbordAdmin';
import CommandeForm from './commande_steps';
import AllCommandeList from './AllCommandeList';
import PaidCommandList from './PaidCommandList';
import UnpaidCommandeList from './UnpaidCommandeList';

const CommandeList = () => {
	const [key, setKey] = useState('home');
	const [commandeFormContainer, setCommandeFormContainer] = useState(false);
	return (
		<div className="px-5 py-5">
			{/* <DashboardAdmin /> */}
			<Card
				style={{
					backgroundColor: 'white',
					margin: '5% 0 0',
					padding: '5% 5% 0',
					//height: '100%',
					zIndex: 10,
				}}
			>
				<Tab.Container id="left-tabs-example" defaultActiveKey="first">
					<Row>
						<Col sm={3}>
							<Nav variant="pills" className="flex-column">
								<Nav.Item>
									<Nav.Link eventKey="first">Toutes les Commandes</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="second">Mes Commandes</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="third">Commandes Payés</Nav.Link>
								</Nav.Item>
								<Nav.Item>
									<Nav.Link eventKey="fourth">Commandes En Attente</Nav.Link>
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
										//onClick={() => setUserFormContainer(true)}
									>
										+ Ajouter Une Commande
									</Nav.Link>
								</Nav.Item>
							</Nav>
						</Col>
						<Col sm={9}>
							<Tab.Content>
								<Tab.Pane eventKey="first">
									<div
										className="px-4 py-4"
										style={{ fontSize: '0.8rem', height: '100vh' }}
									>
										<AllCommandeList />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="second">
									<div
										className="px-4 py-4"
										style={{ fontSize: '0.8rem', height: '100vh' }}
									>
										<PaidCommandList />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="third">
									<div
										className="px-4 py-4"
										style={{ fontSize: '0.8rem', height: '100vh' }}
									>
										<UnpaidCommandeList />
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="fifth">
									<div>{commandeFormContainer && <CommandeForm />}</div>
								</Tab.Pane>
							</Tab.Content>
						</Col>
					</Row>
				</Tab.Container>
			</Card>
		</div>
	);
};

export default CommandeList;
