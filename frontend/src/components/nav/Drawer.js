import React, { Fragment } from "react";
import { Offcanvas } from "react-bootstrap";

const Drawer = ({ show, onHide, width, ...props }) => {
  return (
    <Fragment>
      <Offcanvas show={show} onHide={onHide} style={{ width: `${width}vw` }}>
        <Offcanvas.Body>
          <ul className="my-5 side-menu">
            <li className="my-5"> <i className="mx-3 fa fa-solid fa-house"></i> Accueil</li>
            <li className="my-5"><i className="mx-3 fa fa-solid fa-phone"></i>Contact</li>
            <li className="my-5"><i className="mx-3 fa fa-solid fa-newspaper"></i>Nouveautés</li>
            <li className="my-5"><i className="mx-3 fa fa-solid fa-house"></i> A Propos</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </Fragment>
  );
};

export default Drawer;
