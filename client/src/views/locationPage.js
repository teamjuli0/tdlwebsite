import React from 'react'

import { Navbar } from '../components/bootstrap'
import { MapDark } from '../components/maps'

import { BgImg } from '../images/backgrounds'

class LocationPage extends React.Component {
  render() {
    return (
      <>
        <div
          style={{
            height: '100vh',
            color: 'white',
            fontFamily: 'Montserrat, sans-serif',
            textAlign: 'center'
          }}
        >
          <div
            className='container-fluid'
            style={{
              height: '45vh',
              backgroundImage: `url('${BgImg}')`,
              backgroundSize: 'cover'
            }}
          >
            <Navbar />
            <div className='row'>
              <div
                className='col-sm'
                style={{
                  height: '45vh',
                  paddingTop: '7vh'
                }}
              >
                <p
                  style={{
                    fontSize: 70,
                    letterSpacing: '10px',
                    fontWeight: 'bold'
                  }}
                >
                  ACOMPÁÑANOS!
                </p>
                <p
                  style={{
                    paddingTop: '3vh',
                    fontSize: 17,
                    color: '#cccccc'
                  }}
                >
                  Porque mejor es un día en tus atrios que mil fuera de ellos{' '}
                  <span
                    style={{
                      color: '#cccccc',
                      paddingLeft: '1vh',
                      fontSize: 13
                    }}
                  >
                    ||Salmos 84:10 RVR 1960||
                  </span>
                  {/* 4810 S Vermont Ave, Los Angeles, CA, 90037 | (800) 555-5555 */}
                </p>
                <p />
              </div>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div
                className=''
                style={{
                  margin: 'auto',
                  width: '90vw',
                  paddingTop: '2.5vh',
                  height: '45vh'
                }}
              >
                <MapDark
                  style={{
                    width: '90vw',
                    height: '40vh',
                    borderRadius: '8px'
                  }}
                />
              </div>
            </div>
            <div className='row'>
              <div className='col-sm-3'>
                <a
                  href='https://www.google.com/maps/place/4810+Vermont+Ave,+Los+Angeles,+CA+90037/@33.9991905,-118.2934278,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c8197af14ed5:0xa092388c698f0487!8m2!3d33.9991905!4d-118.2912391'
                  role='button'
                  class='btn btn-dark btn-block'
                  style={{
                    fontWeight: 'bolder',
                    marginTop: '2.25vh'
                  }}
                >
                  Direciones
                </a>
              </div>

              <div className='col-sm-3'>
                <a
                  href='/sermones'
                  role='button'
                  class='btn btn-dark btn-block'
                  style={{
                    fontWeight: 'bolder',
                    marginTop: '2.25vh'
                  }}
                >
                  Sermones
                </a>
              </div>
              <div className='col-sm-3'>
                <a
                  href='/sermones'
                  role='button'
                  class='btn btn-primary btn-block'
                  style={{
                    fontWeight: 'bolder',
                    marginTop: '2.25vh'
                  }}
                >
                  Sobre Nosotros
                </a>
              </div>
              <div className='col-sm-3'>
                <button
                  type='button'
                  class='btn btn-danger btn-block'
                  style={{
                    fontWeight: 'bolder',
                    marginTop: '2.25vh',
                    alignItems: 'right'
                  }}
                >
                  1(800)555-5555
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LocationPage
