import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './Sidebar';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import GraphAdmin from './GraphAdmin';
import './Dashboards.css';
import UserList from './UserList';

const DashboardAdmin = () => {
	const [showDrawer, setShowDrawer] = useState(false);

	const toggleDrawer = () => {
		setShowDrawer(!showDrawer);
	};

	const [showHome, setShowHome] = useState(true);
	const [showSetting, setShowSetting] = useState(false);
	const [showSettingDropdown, setShowSettingDropdown] = useState(false);
	const [showAccount, setShowAccount] = useState(false);
	const [showSales, setShowSales] = useState(false);
	const [showDelivery, setShowDelivery] = useState(false);
	const [showUsers, setShowUsers] = useState(false);
	const [showStocks, setShowStocks] = useState(false);
	//const [showLivraison, setShowLivraison] = useState(false);
	const [showArticles, setShowArticles] = useState(false);

	function toggleHome() {
		setShowHome(showHome);
    toggleDrawer()
	}
	function toggleSetting() {
		setShowSetting(!showSetting);
	}
	function toggleAccount() {
		setShowAccount(!showAccount);
	}
	function toggleSales() {
		setShowSales(!showSales);
	}
	function toggleDelivery() {
		setShowDelivery(!showDelivery);
	}
	function toggleDropdown() {
		setShowSettingDropdown(!showSettingDropdown);
	}
	function toggleUsers() {
		setShowUsers(!showUsers);
    setShowHome(!showHome)
    console.log({showUsers, showHome})
    toggleDrawer()
	}
	function toggleArticles() {
		setShowArticles(!showArticles);
	}
	function toggleStocks() {
		setShowStocks(!showStocks);
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
					<Sidebar
						width={25}
						onHide={() => setShowDrawer(false)}
						show={showDrawer}
						onClickHome={toggleHome}
						onToggleDropdown={toggleDropdown}
						onClickAccount={toggleAccount}
						onClickSales={toggleSales}
						onClickDelivery={toggleDelivery}
						onClickUsers={toggleUsers}
						onClickArticles={toggleArticles}
						onClickStocks={toggleStocks}
						dropdown={showSettingDropdown}
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
        showUsers && (<div style={{ height: '100%' }}><UserList /></div>)
      }
		</Container>
	);
};

export default DashboardAdmin;
