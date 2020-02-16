import React from 'react'
import MediaQuery from 'react-responsive'

import { Navbar } from '../components/bootstrap'
import { AboutCard } from '../components/infoCards'
import {
  BeliefsCard,
  ValuesCard,
  LeadersCard
} from '../components/aboutPageCards'

import { DownArrow } from '../images/logosAndIcons'

class AboutPage extends React.Component {
  state = {
    isEmptyState: true,
    isBeliefsState: false,
    isValuesState: false,
    isLeadersState: true,
    currentWidth: '',
    currentHeight: ''
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this))
    this.resize()
  }

  resize = () => {
    this.setState({
      currentWidth: window.innerWidth,
      currentHeight: window.innerHeight
    })
  }

  triggerBeliefs = () => {
    if (this.state.isBeliefsState) {
      this.setState({
        isEmptyState: true,
        isBeliefsState: false
      })
    } else {
      this.setState({
        isEmptyState: false,
        isBeliefsState: true,
        isValuesState: false,
        isLeadersState: false
      })
    }
  }

  triggerValues = () => {
    if (this.state.isValuesState) {
      this.setState({
        isEmptyState: true,
        isValuesState: false
      })
    } else {
      this.setState({
        isEmptyState: false,
        isBeliefsState: false,
        isValuesState: true,
        isLeadersState: false
      })
    }
  }

  triggerLeaders = () => {
    if (this.state.isLeadersState) {
      this.setState({
        isEmptyState: true,
        isLeadersState: false
      })
    } else {
      this.setState({
        isEmptyState: false,
        isBeliefsState: false,
        isValuesState: false,
        isLeadersState: true
      })
    }
  }

  render() {
    return (
      <>
        <div
          style={{
            backgroundColor: '#212a36',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          <Navbar />
          <div
            className='container-fluid'
            style={{
              minHeight: '55vh',
              backgroundColor: '#212a36',
              fontFamily: 'Montserrat, sans-serif',
              maxWidth: '900px'
            }}
          >
            <MediaQuery minDeviceWidth={768}>
              <div className='row'>
                <div
                  className='col-sm'
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    paddingTop: '4vh'
                  }}
                >
                  <p
                    style={{
                      fontSize: 40,
                      fontWeight: 'bolder'
                    }}
                  >
                    Sobre Nosotros
                  </p>
                  <p
                    style={{
                      paddingTop: '3vh',
                      fontSize: 20
                    }}
                  >
                    Con Dios A Tu Lado No Hay Tribulacion
                  </p>
                  <p
                    style={{
                      paddingTop: '.5vh',
                      fontSize: 20
                    }}
                  >
                    Que Te Pueda Tumbar, Seras Como La Palmera
                  </p>
                </div>
              </div>
              <div
                className='row'
                style={{
                  margin: 'auto',
                  marginTop: '5vh'
                }}
              >
                <AboutCard
                  handleClick={this.triggerBeliefs}
                  CircleLetter='C'
                  Description='Cuales Son Nuestras Creencias'
                  ButtonText='Ver Creencias'
                />
                <AboutCard
                  handleClick={this.triggerValues}
                  CircleLetter='V'
                  Description='Descubre Nuestros Valores y Principios'
                  ButtonText='Ver Valores'
                />
                <AboutCard
                  handleClick={this.triggerLeaders}
                  CircleLetter='L'
                  Description='Conoce Quienes Son Nuestros Lideres'
                  ButtonText='Ver Lideres'
                />
              </div>
            </MediaQuery>

            <MediaQuery maxDeviceWidth={765}>
              <div className='row'>
                <div
                  className='col-sm'
                  style={{
                    color: 'white',
                    textAlign: 'center',
                    marginTop: '30px',
                    fontFamily: 'Lato, sans-serif',
                    paddingLeft: '35px',
                    paddingRight: '35px'
                  }}
                >
                  <p
                    style={{
                      fontSize: '30px',
                      fontWeight: 'bolder'
                    }}
                  >
                    Sobre Nosotros
                  </p>
                  <p
                    style={{
                      fontFamily: 'Montserrat, sans-serif',
                      paddingTop: '30px',
                      fontSize: '20px'
                    }}
                  >
                    Con Dios A Tu Lado No Hay Tribulacion Que Te Pueda Tumbar,
                    Seras Como La Palmera
                  </p>
                </div>
              </div>
              <div
                id='carouselExampleControls'
                className='carousel slide'
                data-ride='carousel'
                style={{
                  marginTop: '50px'
                }}
              >
                <div className='carousel-inner'>
                  <div className='carousel-item active'>
                    <AboutCard
                      handleClick={this.triggerBeliefs}
                      CircleLetter='C'
                      Description='Cuales Son Nuestras Creencias'
                      ButtonText='Ver Creencias'
                    />
                  </div>
                  <div className='carousel-item'>
                    <AboutCard
                      handleClick={this.triggerValues}
                      CircleLetter='V'
                      Description='Descubre Nuestros Valores y Principios'
                      ButtonText='Ver Valores'
                    />
                  </div>
                  <div className='carousel-item'>
                    <AboutCard
                      handleClick={this.triggerLeaders}
                      CircleLetter='L'
                      Description='Conoce Quienes Son Nuestros Lideres'
                      ButtonText='Ver Lideres'
                    />
                  </div>
                </div>
                <a
                  className='carousel-control-prev'
                  href='#carouselExampleControls'
                  role='button'
                  data-slide='prev'
                >
                  <span
                    className='carousel-control-prev-icon'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Previous</span>
                </a>
                <a
                  className='carousel-control-next'
                  href='#carouselExampleControls'
                  role='button'
                  data-slide='next'
                >
                  <span
                    className='carousel-control-next-icon'
                    aria-hidden='true'
                  />
                  <span className='sr-only'>Next</span>
                </a>
              </div>
            </MediaQuery>

            <div className='row'>
              <div
                className='col-sm bounce'
                style={{
                  textAlign: 'center',
                  marginTop: '10vh'
                }}
              >
                {!this.state.isEmptyState ? (
                  <img width='40' height='40' alt='' src={DownArrow} />
                ) : null}
              </div>
            </div>
          </div>
          <div
            className='container-fluid'
            style={{
              paddingRight: '2vh',
              paddingLeft: '2vh',
              backgroundImage: 'linear-gradient(to bottom, #e5e5e5, white)'
            }}
          >
            <div
              style={{
                maxWidth: '900px',
                margin: 'auto'
              }}
            >
              {this.state.isBeliefsState ? <BeliefsCard /> : null}
              {this.state.isLeadersState ? <LeadersCard /> : null}
              {this.state.isValuesState ? <ValuesCard /> : null}
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default AboutPage
