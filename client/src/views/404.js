import React from 'react'

import { Navbar } from '../components/bootstrap'

const PageNotFoundMobile = () => (
  <>
    <div
      style={{
        backgroundColor: '#212a36',
        color: 'white',
        minHeight: '700px'
      }}
    >
      <Navbar />
      <div
        style={{
          textAlign: 'center'
        }}
      >
        <p
          style={{
            marginTop: '45px',
            paddingBottom: '15px'
          }}
        >
          ERROR
        </p>
        <p
          style={{
            fontSize: 150
          }}
        >
          404
        </p>
        <div
          style={{
            margin: 'auto',
            width: '350px',
            height: '125px',
            backgroundColor: '#131920',
            borderRadius: '100px'
          }}
        >
          <p
            style={{
              marginTop: '25px',
              padding: '25px',
              paddingBottom: '10px',
              fontSize: '17px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 'bolder',
              color: '#d2d4d6'
            }}
          >
            La pagina que busca no fue encontrada. Precione el boton de inicio para regresar a la pagina principal.
          </p>
          <a
            style={{
              marginTop: '5px',
              width: '150px',
              backgroundColor: '#636972',
              border: '0px',
              color: 'white'
            }}
            href='/'
            className='btn btn-light'
          >
            Inicio
          </a>
        </div>
      </div>
    </div>
  </>
)

export default PageNotFoundMobile
