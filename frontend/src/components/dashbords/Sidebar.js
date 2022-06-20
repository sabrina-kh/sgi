import React, { Fragment, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "../../store/actions/auth.action";

const Sidebar = ({ show, onHide, width, ...props }) => {
  const dispatch = useDispatch()

    const [showHome, setShowHome] = useState(true)
    const [showSetting, setShowSetting] = useState(false)
    const [showAccount, setShowAccount] = useState(false)
    const [showSales, setShowSales] = useState(false)
    const [showDelivery, setShowDelivery] = useState(false)

    function toggleHome() {
        setShowHome(!showHome)
    }
    function toggleSetting() {
        setShowSetting(!showSetting)
    }
    function toggleAccount() {
        setShowAccount(!showAccount)
    }
    function toggleSales() {
        setShowSales(!showSales)
    }
    function toggleDelivery() {
        setShowDelivery(!showDelivery)
    }

  return (
    <Fragment>
      <Offcanvas show={show} onHide={onHide} style={{ width: `${width}vw` }}>
        <Offcanvas.Body>
          <ul className="my-5 side-menu d-flex flex-column menu">
            <Link to='#' onClick={toggleHome} className="my-4 menu" style={{ color: 'black', fontStyle: 'none', textDecoration: 'none' }}> <i className="mx-3 fa fa-solid fa-house"></i> Accueil</Link>
            <Link to="#" onClick={toggleSetting} className="my-4 menu" style={{ color: 'black', fontStyle: 'none', textDecoration: 'none' }}><i className="mx-3 fa fa-solid fa-gear"></i>Paramétres</Link>
            <Link to="#" onClick={toggleAccount} className="my-4 menu" style={{ color: 'black', fontStyle: 'none', textDecoration: 'none' }}><i className="mx-3 fa fa-solid fa-circle-user"></i>Compte</Link>
            <Link to="#" onClick={toggleSales} className="my-4 menu" style={{ color: 'black', fontStyle: 'none', textDecoration: 'none' }}><i className="mx-3 fa fa-solid fa-cart-plus"></i> Vente</Link>
            <Link to="#" onClick={toggleDelivery} className="my-4 menu" style={{ color: 'black', fontStyle: 'none', textDecoration: 'none' }}><i className="mx-3 fa fa-solid fa-bus-simple"></i> Livraison</Link>
            <Link to="#" onClick={dispatch(logout())} className="my-4 menu" style={{ color: 'black', fontStyle: 'none', textDecoration: 'none' }}><i className="mx-3 fa fa-solid fa-power-off"></i> Deconnexion</Link>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default Sidebar;
