import React from 'react'

import { YoutubeLogo } from '../images/logosAndIcons'

class FooterMobile extends React.Component {
  render() {
    return (
      <div>
        <div
          className='container-fluid'
          style={{
            backgroundColor: '#f2f2f2',
            boxShadow: '0 0 15px #797f86',
            MozBoxShadow: '0 0 15px #797f86',
            WebkitBoxShadow: '0 0 15px #797f86'
          }}
        >
          <div
            className='row'
            style={{
              color: '#4c4c4c',
              minHeight: '70px',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800',
              maxWidth: '1024px',
              margin: 'auto'
            }}
          >
            <div
              className='col-sm-3'
              style={{
                minHeight: '40px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                style={{
                  color: '#4c4c4c'
                }}
                href='/sermones'
              >
                SERMONES
              </a>
            </div>
            <div
              className='col-sm-3'
              style={{
                minHeight: '40px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                style={{
                  color: '#4c4c4c'
                }}
                href='/nosotros'
              >
                SOBRE NOSOTROS
              </a>
            </div>
            <div
              className='col-sm-3'
              style={{
                minHeight: '40px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                style={{
                  color: '#4c4c4c'
                }}
                href='/visitanos'
              >
                LOCACION
              </a>
            </div>
            <div
              className='col-sm-3'
              style={{
                minHeight: '40px',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <a
                style={{
                  color: '#4c4c4c'
                }}
                href='/contactanos'
              >
                CONTACTANOS!
              </a>
            </div>
          </div>
          <div
            className='row'
            style={{
              color: '#4c4c4c',
              backgroundColor: '#e5e5e5',
              backgroundSize: 'cover',
              paddingBottom: '50px'
            }}
          >
            <div className='col-sm'>
              <div
                className='row'
                style={{
                  paddingTop: '40px',
                  maxWidth: '500px',
                  margin: 'auto'
                }}
              >
                <div
                  style={{
                    width: '50%',
                    textAlign: 'center'
                  }}
                >
                  <a
                    style={{
                      borderRadius: '5px',
                      padding: '.5vh',
                      paddingRight: '1.5vh',
                      paddingLeft: '1.5vh',
                      color: 'white',
                      fontSize: 23,
                      backgroundColor: '#363636',
                      textDecoration: 'none'
                    }}
                    href='https://www.facebook.com/tvcristianopentecostes.pentecostes'
                  >
                    facebook<span style={{ fontSize: 9 }}>©</span>
                  </a>
                </div>
                <div
                  style={{
                    width: '50%',
                    textAlign: 'center'
                  }}
                >
                  <a
                    style={{
                      borderRadius: '5px',
                      padding: '.5vh',
                      paddingRight: '1.5vh',
                      paddingLeft: '1.5vh',
                      color: 'white',
                      fontSize: 23,
                      backgroundColor: '#363636',
                      textDecoration: 'none'
                    }}
                    href='https://www.youtube.com/channel/UCOQVMU-4ES1hnCs2Un--omg'
                  >
                    <span>
                      <img
                        src={YoutubeLogo}
                        alt=''
                        style={{
                          height: 20,
                          paddingRight: '1vh'
                        }}
                      />
                    </span>
                    YouTube
                    <span
                      style={{
                        paddingLeft: '.25vh',
                        fontSize: 9
                      }}
                    >
                      ©
                    </span>
                  </a>
                </div>
              </div>
              <div
                className='row'
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  margin: 'auto',
                  minHeight: '275px',
                  fontFamily: 'Montserrat, sans-serif',
                  textAlign: 'center'
                }}
              >
                <div className='col-sm'>
                  <p
                    style={{
                      marginTop: '50px',
                      fontWeight: 900
                    }}
                  >
                    Sobre Nosotros
                  </p>

                  <ul>
                    <li style={{ marginTop: '30px' }}>
                      <a href='/creencias'>Creencias</a>
                    </li>
                    <li style={{ marginTop: '20px' }}>
                      <a href='/valores'>Valores</a>
                    </li>
                    <li style={{ marginTop: '20px' }}>
                      <a href='/lideres'>Lideres</a>
                    </li>
                  </ul>
                </div>
                <div className='col-sm'>
                  <p
                    style={{
                      paddingTop: '50px',
                      fontWeight: 900
                    }}
                  >
                    Mas Referencias
                  </p>
                  <ul>
                    <li style={{ marginTop: '30px' }}>
                      <a href='/contactanos'>Contactanos</a>
                    </li>
                    <li style={{ marginTop: '20px' }}>
                      <a href='/direciones'>Direciones</a>
                    </li>
                    <li style={{ marginTop: '20px' }}>
                      <a href='/horario'>Horario</a>
                    </li>
                  </ul>
                </div>
                <div className='col-sm'>
                  <p
                    style={{
                      marginTop: '50px',
                      fontWeight: 900
                    }}
                  >
                    Versos De Vida
                  </p>
                  <ul>
                    <li style={{ marginTop: '30px' }}>Jeremiah 29:11</li>
                    <li style={{ marginTop: '20px' }}>Proverbios 17:17</li>
                    <li style={{ marginTop: '20px' }}>Roman 8:31</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div
            className='row'
            style={{
              minHeight: '100px',
              backgroundColor: '#2a2a2a',
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px',
              textAlign: 'center'
            }}
          >
            <div className='col-sm'>
              <p style={{ color: '#b2b2b2', minHeight: '5vh', paddingTop: '2.5vh' }}>
                4810 S Vermont Ave, Los Angeles, CA, 90037 | (800) 555-5555
              </p>
              <p style={{ color: '#666666', minHeight: '5vh', fontSize: '13px' }}>
                © 2019 Tabernaculo De Liberacion. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterMobile
