import react from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Navigationbar = ({ colour }) => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-5 py-3">
  <div className="container-fluid">
    <Link to="/"  className="navbar-brand" style={{ fontFamily: ['Oswald'], fontSize:"2rem" }}>SystemGI</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link to="/"  className="nav-link active" href="#"><i className="fa fa-solid fa-house-user"></i>  Accueil
            <span className="visually-hidden">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/register" className="nav-link" href="#">Créer Compte Admin</Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link" href="#">Se connecter</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navigationbar
