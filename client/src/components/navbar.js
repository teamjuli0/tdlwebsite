import React from 'react'
import { Link } from 'react-router-dom'

import menuIcon from '../images/menuIcon.png'
import tabernaculoIcon from '../images/roundCross.png'

const Navbar = props => (
  <nav
    className='navbar navbar-expand-lg navbar-dark'
    style={{
      fontFamily: 'Cinzel, sans-serif'
    }}
  >
    <a className='navbar-brand' href='/'>
      <img
        src={tabernaculoIcon}
        style={{
          height: '6vh'
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
        src={menuIcon}
        alt=''
        style={{
          height: '3vh'
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
          <Link to='/direciones' className='nav-link'>
            Direciones
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
