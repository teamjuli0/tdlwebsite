import React from 'react'
import BackgroundSlider from 'react-background-slider'

import { Navbar } from '../../components/bootstrap'
import { MapMobile } from '../../components/mobile/maps'

import { Mike, Julio, Axel, Eating, Beach } from '../../images/slideshowBackground'

import { DownArrow } from '../../images/logosAndIcons'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />

        <div
          style={{
            textAlign: 'center',
            color: '#ecedee'
          }}
        >
          <BackgroundSlider
            images={[Julio, Eating, Mike, Axel, Beach]}
            duration={7}
            transition={1}
            style={{
              minHeight: '1000px',
              width: '100vw'
            }}
          />
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='row'>
                  <div className='col-sm'>
                    <p
                      style={{
                        paddingTop: '60px',
                        fontSize: '15px'
                      }}
                    >
                      CUANDO TU LE HABLAS
                    </p>
                    <p
                      style={{
                        paddingTop: '5px',
                        fontSize: '40px'
                      }}
                    >
                      JESUS ESCUCHA
                    </p>
                  </div>
                </div>
                <div className='row'>
                  <div
                    className='col-sm'
                    style={{
                      margin: 'auto',
                      marginTop: '25px'
                    }}
                  >
                    <a
                      style={{
                        margin: '5px',
                        marginTop: 0
                      }}
                      href='/sermones'
                      className='btn btn-light'
                    >
                      Sermones
                    </a>
                    <a
                      style={{
                        margin: 5,
                        marginTop: 0
                      }}
                      href='/sermones'
                      className='btn btn-light'
                    >
                      Horarios
                    </a>
                  </div>
                </div>
              </div>

              <div className='col-sm-6'>
                <div className='row'>
                  <div
                    style={{
                      marginTop: '90px',
                      fontFamily: 'Montserrat, sans-serif',
                      width: '100vw',
                      paddingRight: '10vw',
                      textAlign: 'right'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '17px',
                        fontWeight: 'bold',
                        letterSpacing: '1px',
                        paddingBottom: '10px'
                      }}
                    >
                      <p>Esforzaos todos vosotros los que</p>
                      <p>Esperáis en Jehová, Y tome</p>
                      <p>Aliento vuestro corazón</p>
                    </div>

                    <p
                      style={{
                        fontSize: '13px'
                      }}
                    >
                      |RVR1960|Salmos 31:24
                    </p>
                  </div>
                </div>
                <div
                  className='row'
                  style={{
                    paddingBottom: '30px'
                  }}
                >
                  <div className='col-sm bounce'>
                    <img
                      style={{
                        marginTop: '80px'
                      }}
                      width='40px'
                      height='40px'
                      alt=''
                      src={DownArrow}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div
            className='row'
            style={{
              backgroundColor: 'white',
              paddingTop: '20px',
              paddingBottom: '20px'
            }}
          >
            <div className='col-sm-6'>
              <MapMobile
                Style={{
                  height: '300px',
                  borderRadius: '10px',
                  border: '3px solid #e4e5e6',
                  boxShadow: '0 0 20px gray',
                  MozBoxShadow: '0 0 20px gray',
                  WebkitBoxShadow: '0 0 20px gray'
                }}
              />
            </div>
            <div
              className='col-sm-6'
              style={{
                textAlign: 'left',
                padding: '20px',
                paddingTop: '40px',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: '22px'
              }}
            >
              <p
                style={{
                  lineHeight: '30px'
                }}
              >
                Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su
                propósito son llamados.
              </p>
              <p
                style={{
                  fontWeight: 'normal',
                  fontSize: '15px',
                  paddingTop: '10px'
                }}
              >
                Romanos 8:28
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  smallHeader: {},
  largeHeader: {},
  buttonRow: {}
}

export default LandingPage
