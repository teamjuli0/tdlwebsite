import React from 'react'
import { Link } from 'react-router-dom'

import { MenuIcon, RoundCross } from '../../images/logosAndIcons'

const Navbar = props => (
  <nav
    className='navbar navbar-expand-lg navbar-dark'
    style={{
      fontFamily: 'Cinzel, sans-serif'
    }}
  >
    <a className='navbar-brand' href='/'>
      <img
        src={RoundCross}
        style={{
          height: '55px'
        }}
        alt=''
      />
    </a>
    <button
      className='navbar-toggler'
      type='button'
      data-toggle='collapse'
      data-target='#navbarSupportedContent'
      aria-controls='navbarSupportedContent'
      aria-expanded='false'
      aria-label='Toggle navigation'
      style={{ border: 0 }}
    >
      <img
        src={MenuIcon}
        alt=''
        style={{
          height: '25px'
        }}
      />
    </button>

    <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
      <ul className='navbar-nav'>
        <li className='nav-item active'>
          <Link to='/' className='nav-link'>
            Inicio
          </Link>
        </li>
        <li className='nav-item active'>
          <Link to='/sermones' className='nav-link'>
            Sermones
          </Link>
        </li>
        <li className='nav-item active'>
          <Link to='/visitanos' className='nav-link'>
            Visitanos
          </Link>
        </li>
        <li className='nav-item active'>
          <Link to='/nosotros' className='nav-link'>
            Sobre Nosotros
          </Link>
        </li>
      </ul>
    </div>
  </nav>

  // <div
  //   className='row'
  //   style={{
  //     color: 'white',
  //     height: '7vh',
  //     textAlign: 'center'
  //   }}
  // >
  //   <div
  //     className='col-sm-1'
  //     style={{
  //       padding: '0'
  //     }}
  //   >
  //     <img
  //       src={tabernaculoIcon}
  //       alt=''
  //       style={{
  //         marginTop: '1vh',
  //         marginLeft: '3vh',
  //         height: '6vh'
  //       }}
  //     />
  //   </div>
  // </div>
)

export default Navbar
