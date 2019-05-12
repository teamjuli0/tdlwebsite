import React from 'react'

import { YoutubeLogo } from '../images/logosAndIcons'

class Footer extends React.Component {
  render() {
    return (
      <div style={styles.mainDiv}>
        <div className='container-fluid'>
          <div
            className='row'
            style={{
              height: '7vh',
              display: 'flex',
              alignItems: 'center',
              color: '#4c4c4c',
              backgroundColor: '#f2f2f2',
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: '800'
            }}
          >
            <div
              className='col-sm'
              style={{
                margin: 'auto',
                textAlign: 'center'
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
              className='col-sm'
              style={{
                margin: 'auto',
                textAlign: 'center'
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
              className='col-sm'
              style={{
                margin: 'auto',
                textAlign: 'center'
              }}
            >
              <a
                style={{
                  color: '#4c4c4c'
                }}
                href='/direciones'
              >
                LOCACION
              </a>
            </div>
            <div
              className='col-sm'
              style={{
                margin: 'auto',
                textAlign: 'center'
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
              height: '46vh',
              color: '#4c4c4c',
              backgroundColor: '#e5e5e5',
              backgroundSize: 'cover'
            }}
          >
            <div
              className='row'
              style={{
                width: '60%',
                height: '11vh',
                margin: 'auto'
              }}
            >
              <div
                className='col-sm'
                style={{
                  textAlign: 'center',
                  paddingTop: '6vh'
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
                className='col-sm'
                style={{
                  textAlign: 'center',
                  paddingTop: '6vh'
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
                height: '35vh',
                fontFamily: 'Montserrat, sans-serif'
              }}
            >
              <div className='col-sm-2' />
              <div className='col-sm'>
                <p
                  style={{
                    marginTop: '3vh',
                    fontWeight: 900
                  }}
                >
                  Sobre Nosotros
                </p>

                <ul style={{ paddingTop: '1vh' }}>
                  <li style={{ marginTop: '3vh' }}>
                    <a href='/nosotros'>Creencias</a>
                  </li>
                  <li style={{ marginTop: '3vh' }}>
                    <a href='/nosotros'>Valores</a>
                  </li>
                  <li style={{ marginTop: '3vh' }}>
                    <a href='/nosotros'>Lideres</a>
                  </li>
                </ul>
              </div>
              <div className='col-sm'>
                <p style={{ marginTop: '3vh', fontWeight: 900 }}>Mas Referencias</p>
                <ul style={{ paddingTop: '1vh' }}>
                  <li style={{ marginTop: '3vh' }}>
                    <a href='/contatanos'>Contactanos</a>
                  </li>
                  <li style={{ marginTop: '3vh' }}>
                    <a href='/eventos'>Eventos</a>
                  </li>
                  <li style={{ marginTop: '3vh' }}>
                    <a href='/consorcio'>Consorcio</a>
                  </li>
                </ul>
              </div>
              <div className='col-sm'>
                <p style={{ marginTop: '3vh', fontWeight: 900 }}>Versos De Vida</p>
                <ul style={{ paddingTop: '1vh' }}>
                  <li style={{ marginTop: '3vh' }}>Jeremiah 29:11</li>
                  <li style={{ marginTop: '3vh' }}>Proverbios 17:17</li>
                  <li style={{ marginTop: '3vh' }}>Roman 8:31</li>
                </ul>
              </div>
              <div className='col-sm-2' />
            </div>
          </div>
          <div
            className='row'
            style={{
              height: '10vh',
              backgroundColor: '#2a2a2a',
              color: 'white',
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '15px'
            }}
          >
            <div className='col-sm'>
              <p style={{ color: '#b2b2b2', height: '5vh', paddingTop: '2.5vh' }}>
                4810 S Vermont Ave, Los Angeles, CA, 90037 | (800) 555-5555
              </p>
              <p style={{ color: '#666666', height: '5vh', fontSize: '13px' }}>
                © 2019 Tabernaculo De Liberacion. All Rights Reserved | Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

const styles = {
  mainDiv: {
    textAlign: 'center',
    backgroundColor: 'white',
    display: 'block'
  }
}

// font-family: 'Montserrat', sans-serif;
// font-family: 'Roboto', sans-serif;
// font-family: 'Lato', sans-serif;
