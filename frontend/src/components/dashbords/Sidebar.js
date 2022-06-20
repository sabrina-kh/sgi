import React, { Fragment, useState } from "react";
import {
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../store/actions/auth.action";

const Sidebar = ({ show, onHide, width, ...props }) => {
  const dispatch = useDispatch();

  const [showHome, setShowHome] = useState(true);
  const [showSetting, setShowSetting] = useState(false);
  const [showSettingDropdown, setShowSettingDropdown] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showSales, setShowSales] = useState(false);
  const [showDelivery, setShowDelivery] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showStock, setShowStock] = useState(false);
  const [showLivraison, setShowLivraison] = useState(false);
  const [showArticles, setShowArticles] = useState(false);


  function toggleHome() {
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
  }
  function toggleDropdown() {
    setShowSettingDropdown(!showSettingDropdown);
  }

  return (
    <Fragment>
      <Offcanvas show={show} onHide={onHide} style={{ width: `${width}vw` }}>
        <Offcanvas.Body>
          <ul className="my-5 side-menu d-flex flex-column menu">
            <Link
              to="#"
              onClick={toggleHome}
              className="my-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
              }}
            >
              {" "}
              <i className="mx-3 fa fa-solid fa-house"></i> Accueil
            </Link>
            <Link
              to="#"
              onClick={toggleDropdown}
              className="my-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
              }}
            >
              <i className="mx-3 fa fa-solid fa-gear"></i>Paramétres<i className={` mx-5 fa fa-solid fa-angle-${!showSettingDropdown ? 'down' : 'up'}`}></i>
            </Link>
            {
              showSettingDropdown && <Fragment>
              <Link
              to="#"
              onClick={toggleDropdown}
              className="my-4 mx-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
                fontSize: "1.7rem"
              }}
            >
            Utilisateurs
            </Link> 
            <Link
              to="#"
              onClick={toggleDropdown}
              className="my-4 mx-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
                fontSize: "1.7rem"
              }}
            >
              Livraison
            </Link>
            <Link
              to="#"
              onClick={toggleDropdown}
              className="my-4 mx-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
                fontSize: "1.7rem"
              }}
            >
              Articles
            </Link>
            <Link
              to="#"
              onClick={toggleDropdown}
              className="my-4 mx-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
                fontSize: "1.7rem"
              }}
            >
            Stocks
            </Link>
              </Fragment>
            }
            <Link
              to="#"
              onClick={toggleAccount}
              className="my-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
              }}
            >
              <i className="mx-3 fa fa-solid fa-circle-user"></i>Compte
            </Link>
            <Link
              to="#"
              onClick={toggleSales}
              className="my-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
              }}
            >
              <i className="mx-3 fa fa-solid fa-cart-plus"></i> Vente
            </Link>
            <Link
              to="#"
              onClick={toggleDelivery}
              className="my-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
              }}
            >
              <i className="mx-3 fa fa-solid fa-bus-simple"></i> Livraison
            </Link>
            <Link
              to="#"
              onClick={dispatch(logout())}
              className="my-4 menu"
              style={{
                color: "black",
                fontStyle: "none",
                textDecoration: "none",
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
