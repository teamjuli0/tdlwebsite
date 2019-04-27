import React from 'react'
import { Button, Navbar } from '../components'
import Mike from '../images/mike.jpg'
import Julio from '../images/julio.jpg'
import Axel from '../images/axel.jpg'
import Eating from '../images/sittingEating.jpg'
import Beach from '../images/beach.jpg'
import DownArrow from '../images/downArrow.png'
import BackgroundSlider from 'react-background-slider'
import { Map } from '../components'

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <BackgroundSlider
          images={[Julio, Eating, Mike, Axel, Beach]}
          duration={7}
          transition={1}
          style={{ height: '80vh' }}
        />
        <div style={styles.background}>
          <div className='container'>
            <div className='row'>
              <div className='col-sm'>
                <p style={styles.smallHeader}>CUANDO TU LE HABLAS</p>
                <p style={styles.largeHeader}>JESUS ESCUCHA</p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm' style={styles.buttonRow}>
                <a
                  style={{
                    margin: 5,
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
            <div className='row'>
              <div
                style={{
                  margin: 'auto',
                  marginTop: '7vh',
                  fontFamily: 'Montserrat, sans-serif',
                  width: '50vh',
                  textAlign: 'right'
                }}
              >
                <p
                  style={{
                    fontSize: 27,
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    paddingBottom: '1vh'
                  }}
                >
                  Esforzaos todos vosotros los que esperáis en Jehová, Y tome aliento vuestro corazón.
                </p>
                <p
                  style={{
                    fontSize: 13
                  }}
                >
                  |RVR1960|Salmos 31:24
                </p>
              </div>
            </div>
            <div className='row'>
              <div className='col-sm bounce'>
                <img
                  style={{
                    marginTop: '15vh'
                  }}
                  width='40'
                  height='40'
                  alt=''
                  src={DownArrow}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='container-fluid'>
          <div
            className='row'
            style={{
              backgroundColor: 'white',
              height: '37vh',
              padding: '2.5vh',
              paddingLeft: '5vh'
            }}
          >
            <div className='col-sm-5' style={{ height: '32vh', margin: '0', borderRadius: '10px' }}>
              <div style={{ borderRadius: '10px', maxWidth: '20px' }}>
                <Map style={{ maxWidth: '500px', borderRadius: '8px' }} />
              </div>
            </div>
            <div
              className='col-sm-7'
              style={{
                textAlign: 'left',
                paddingLeft: '10vh',
                marginTop: '3vh',
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 700,
                fontSize: 23
              }}
            >
              <p
                style={{
                  lineHeight: '4vh'
                }}
              >
                Y sabemos que a los que aman a Dios,
              </p>
              <p
                style={{
                  marginBottom: '3vh',
                  lineHeight: '4vh'
                }}
              >
                todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.
              </p>
              <p
                style={{
                  fontWeight: 'normal',
                  fontSize: 15
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
  smallHeader: {
    paddingTop: '15vh',
    fontSize: 20
  },
  largeHeader: {
    fontSize: 80
  },
  buttonRow: {
    margin: 'auto',
    marginTop: '3vh'
  },
  background: {
    // backgroundImage: `url(${Background})`,
    display: 'block',
    height: '80vh',
    backgroundSize: 'cover',
    textAlign: 'center',
    color: '#ecedee'
  }
}

export default LandingPage
