import react, { Fragment, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginModal from '../layout/LoginModal'
import RegisterModal from '../layout/RegisterModal'

const Navigationbar = ({ colour }) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal)
  }

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal)
  }

  return (
    <Fragment>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary px-5 py-3'>
        <div className='container-fluid'>
          <Link
            to='/'
            className='navbar-brand'
            style={{ fontFamily: ['Oswald'], fontSize: '2rem' }}
          >
            SystemGI
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarColor01'
            aria-controls='navbarColor01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarColor01'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active' href='#'>
                  <i className='fa fa-solid fa-house-user'></i> Accueil
                  <span className='visually-hidden'>(current)</span>
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='#'
                  className='nav-link'
                  href='#'
                  onClick={() => toggleRegisterModal()}
                >
                  Créer Compte Admin
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link'
                  href='#'
                  onClick={() => toggleLoginModal()}
                >
                  Se connecter
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <RegisterModal show={showRegisterModal} onHide={toggleRegisterModal} />
      <LoginModal show={showLoginModal} onHide={toggleLoginModal} />
    </Fragment>
  )
}

export default Navigationbar
