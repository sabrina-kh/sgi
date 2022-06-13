import react, { Fragment, useState } from 'react'
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginModal from '../layout/LoginModal'
import RegisterModal from '../layout/RegisterModal'
import Drawer from './Drawer'
import './navigationBar.css'

const Navigationbar = ({ colour }) => {
  const [showDrawer, setShowDrawer] = useState(false)

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer)
  }

  return (
    <Fragment>
      <nav className='navigation navbar navbar-expand-lg navbar-dark px-5 py-5'>
        <div className='container-fluid navigation'>
          <Link
            to='#'
            className='navbar-brand'
            style={{ fontFamily: ['Oswald'], fontSize: '4rem' }}
            onMouseDown={toggleDrawer}
          >
            <i className="fa fa-solid fa-align-left"></i>
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
                <Link
                  className='nav-link'
                  href='#'
                  to='/register'
                >
                  <Button className='px-5 py-2 loginBtn'>Créer Compte</Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Drawer show={showDrawer} onHide={() => setShowDrawer(false)} width={20} />
    </Fragment>
  )
}

export default Navigationbar
