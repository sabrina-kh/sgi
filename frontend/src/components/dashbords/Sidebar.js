import React, { Fragment, useState } from 'react';
import {
	Dropdown,
	DropdownButton,
	Form,
	InputGroup,
	Offcanvas,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout } from '../../store/actions/auth.action';

const Sidebar = ({
	show,
	onHide,
	width,
	onClickHome,
	onClickAccount,
	onClickArticles,
	onClickSales,
	onToggleDropdown,
	onClickUsers,
	onClickStocks,
	onClickDelivery,
  dropdown,
	...props
}) => {
	const dispatch = useDispatch();

	//const [showHome, setShowHome] = useState(true);
	//const [showSetting, setShowSetting] = useState(false);
	//const [showAccount, setShowAccount] = useState(false);
	//const [showSales, setShowSales] = useState(false);
	//const [showDelivery, setShowDelivery] = useState(false);
	//const [showUsers, setShowUsers] = useState(false);
	//const [showStock, setShowStock] = useState(false);
	//const [showLivraison, setShowLivraison] = useState(false);
	//const [showArticles, setShowArticles] = useState(false);

	/* function toggleHome() {
		setShowHome(!showHome);
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
	} */
	/* function toggleDropdown() {
		setShowSettingDropdown(!showSettingDropdown);
	} */

	return (
		<Fragment>
			<Offcanvas show={show} onHide={onHide} style={{ width: `${width}vw` }}>
				<Offcanvas.Body>
					<ul className="my-5 side-menu d-flex flex-column menu">
						<Link
							to="#"
							onClick={onClickHome}
							className="my-4 menu"
							style={{
								color: 'black',
								fontStyle: 'none',
								textDecoration: 'none',
							}}
						>
							{' '}
							<i className="mx-3 fa fa-solid fa-house"></i> Accueil
						</Link>
						<Link
							to="#"
							onClick={() => onToggleDropdown()}
							className="my-4 menu"
							style={{
								color: 'black',
								fontStyle: 'none',
								textDecoration: 'none',
								display: 'flex',
							}}
						>
							<i className="mx-3 fa fa-solid fa-gear"></i>Paramétres
							<i
								className={` mx-5 fa fa-solid fa-angle-${
									!dropdown ? 'down' : 'up'
								}`}
							></i>
						</Link>
						{dropdown && (
							<Fragment>
								<Link
									to="/dashboard/utilisateurs"
									onClick={onClickUsers}
									className="my-2 mx-5 menu"
									style={{
										color: 'black',
										fontStyle: 'none',
										textDecoration: 'none',
										fontSize: '0.8rem',
									}}
								>
									<i className="mx-3 fa fa-solid fa-user"></i>Utilisateurs
								</Link>
								<Link
									to="#"
									onClick={onClickDelivery}
									className="my-2 mx-5 menu"
									style={{
										color: 'black',
										fontStyle: 'none',
										textDecoration: 'none',
										fontSize: '0.8rem',
									}}
								>
									<i className="mx-3 fa fa-solid fa-truck"></i>Livraison
								</Link>
								<Link
									to="#"
									onClick={onClickArticles}
									className="my-2 mx-5 menu"
									style={{
										color: 'black',
										fontStyle: 'none',
										textDecoration: 'none',
										fontSize: '0.8rem',
									}}
								>
									<i className="mx-3 fa fa-solid fa-flask-vial"></i>Articles
								</Link>
								<Link
									to="#"
									onClick={onClickStocks}
									className="my-2 mx-5 menu"
									style={{
										color: 'black',
										fontStyle: 'none',
										textDecoration: 'none',
										fontSize: '0.8rem',
									}}
								>
									<i className="mx-3 fa fa-solid fa-warehouse"></i>Stocks
								</Link>
							</Fragment>
						)}
						<Link
							to="#"
							onClick={onClickAccount}
							className="my-4 menu"
							style={{
								color: 'black',
								fontStyle: 'none',
								textDecoration: 'none',
							}}
						>
							<i className="mx-3 fa fa-solid fa-circle-user"></i>Compte
						</Link>
						<Link
							to="#"
							onClick={onClickSales}
							className="my-4 menu"
							style={{
								color: 'black',
								fontStyle: 'none',
								textDecoration: 'none',
							}}
						>
							<i className="mx-3 fa fa-solid fa-cart-plus"></i> Vente
						</Link>
						<Link
							to="#"
							onClick={onClickDelivery}
							className="my-4 menu"
							style={{
								color: 'black',
								fontStyle: 'none',
								textDecoration: 'none',
							}}
						>
							<i className="mx-3 fa fa-solid fa-bus-simple"></i> Livraison
						</Link>
						<Link
							to="#"
							onClick={() => dispatch(logout())}
							className="my-4 menu"
							style={{
								color: 'black',
								fontStyle: 'none',
								textDecoration: 'none',
							}}
						>
							<i className="mx-3 fa fa-solid fa-power-off"></i> Deconnexion
						</Link>
					</ul>
				</Offcanvas.Body>
			</Offcanvas>
		</Fragment>
	);
};

export default Sidebar;
