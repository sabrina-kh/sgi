import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import GraphAdmin from './GraphAdmin';
import './Dashboards.css';
import UserList from './user_management/UserList';
import SideBarClient from './SideBarClient';
import CommandeList from './commande_management/CommandeList';

const DashboardClient = () => {
	const [showDrawer, setShowDrawer] = useState(false);

	const toggleDrawer = () => {
		setShowDrawer(!showDrawer);
	};

	const [showHome, setShowHome] = useState(true);
	const [showAccount, setShowAccount] = useState(false);
	const [showCommandes, setShowCommandes] = useState(false);

	function toggleHome() {
		setShowHome(showHome);
    toggleDrawer()
	}
	function toggleAccount() {
		setShowAccount(!showAccount);
	}
	function toggleCommandes() {
		setShowCommandes(!showCommandes);
	}
	

	return (
		<Container className="dashboard-admin-container">
			<Row className="dashboard-admin-row-1">
				<Col>
					<Link
						to="#"
						className="navbar-brand toggler my-5 dashboard-admin-drawer-toggler"
						//style={{ fontFamily: ['Oswald'], fontSize: '2rem', color: 'white' }}
						onMouseDown={toggleDrawer}
					>
						<i className="fa fa-solid fa-align-left toggler"></i>
					</Link>
					<SideBarClient
						width={25}
						onHide={() => setShowDrawer(false)}
						show={showDrawer}
						onClickHome={toggleHome}
						onClickAccount={toggleAccount}
						onClickCommandes={toggleCommandes}
					/>
				</Col>
			</Row>
			{showHome && (
				<Row className="px-5 py-1">
					<h5
						className="text-center my-4 dashboard-admin-graph-text"
						//style={{ color: 'white' }}
					>
						Variation mensuelle de taux des comandes et des clients
					</h5>
					<div
						className="px-5 pr-5 pl-5 dashboard-admin-graph-container"
						//style={{ height: '100vh' }}
					>
						<GraphAdmin />
					</div>
				</Row>
			)}
      {
        showCommandes && (<div style={{ height: '100%' }}><CommandeList /></div>)
      }
		</Container>
	);
};

export default DashboardClient;
