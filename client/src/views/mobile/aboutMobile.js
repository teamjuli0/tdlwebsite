import React from 'react'
import MediaQuery from 'react-responsive'

import { Navbar } from '../../components/bootstrap'
import { AboutCard } from '../../components/infoCards'
import { BeliefsCardMobile, ValuesCardMobile, LeadersCardMobile } from '../../components/mobile/aboutPageCards'

import { DownArrow } from '../../images/logosAndIcons'

//onclick if (beliefsCard) {setState: beliefs: false, emptystate: true}
class AboutPage extends React.Component {
  state = {
    isEmptyState: true,
    isBeliefsState: false,
    isValuesState: false,
    isLeadersState: false
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
              fontFamily: 'Montserrat, sans-serif'
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
                  ButtonText='Creencias'
                />
                <AboutCard
                  handleClick={this.triggerValues}
                  CircleLetter='V'
                  Description='Descubre Nuestros Valores y Principios'
                  ButtonText='Valores'
                />
                <AboutCard
                  handleClick={this.triggerLeaders}
                  CircleLetter='L'
                  Description='Conoce Quienes Son Nuestros Lideres'
                  ButtonText='Lideres'
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
                    Con Dios A Tu Lado No Hay Tribulacion Que Te Pueda Tumbar, Seras Como La Palmera
                  </p>
                </div>
              </div>
              <div
                id='carouselExampleControls'
                class='carousel slide'
                data-ride='carousel'
                style={{
                  marginTop: '50px'
                }}
              >
                <div class='carousel-inner'>
                  <div class='carousel-item active'>
                    <AboutCard
                      handleClick={this.triggerBeliefs}
                      CircleLetter='C'
                      Description='Cuales Son Nuestras Creencias'
                      ButtonText='Creencias'
                    />
                  </div>
                  <div class='carousel-item'>
                    <AboutCard
                      handleClick={this.triggerValues}
                      CircleLetter='V'
                      Description='Descubre Nuestros Valores y Principios'
                      ButtonText='Valores'
                    />
                  </div>
                  <div class='carousel-item'>
                    <AboutCard
                      handleClick={this.triggerLeaders}
                      CircleLetter='L'
                      Description='Conoce Quienes Son Nuestros Lideres'
                      ButtonText='Lideres'
                    />
                  </div>
                </div>
                <a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
                  <span class='carousel-control-prev-icon' aria-hidden='true' />
                  <span class='sr-only'>Previous</span>
                </a>
                <a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
                  <span class='carousel-control-next-icon' aria-hidden='true' />
                  <span class='sr-only'>Next</span>
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
                {!this.state.isEmptyState ? <img width='40' height='40' alt='' src={DownArrow} /> : null}
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
            {(this.state.isBeliefsState && <BeliefsCardMobile />) ||
              (this.state.isLeadersState && <LeadersCardMobile />) ||
              (this.state.isValuesState && <ValuesCardMobile />)}
          </div>
        </div>
      </>
    )
  }
}

export default AboutPage

/* <div id='carouselExampleIndicators' className='col-sm carousel slide carousel-fade' data-ride='carousel'>
            <ol className='carousel-indicators'>
              <li data-target='#carouselExampleIndicators' data-slide-to='0' className='active' />
              <li data-target='#carouselExampleIndicators' data-slide-to='1' />
              <li data-target='#carouselExampleIndicators' data-slide-to='2' />
            </ol>
            <div className='carousel-inner'>
              <div className='carousel-item active'>
                <PastServiceCard
                  className='d-block w-100'
                  verse='Romanos 8:28'
                  title='Sermon Title'
                  fullVerse='Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.'
                  preacher='Pastor Julio Venegas'
                  image={PastorJulio}
                />
              </div>
              <div className='carousel-item'>
                <PastServiceCard
                  className='d-block w-100'
                  verse='Romanos 8:28'
                  title='Sermon Title'
                  fullVerse='Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.'
                  preacher='Pastor Julio Venegas'
                  image={PastorJulio}
                />
              </div>
              <div className='carousel-item'>
                <PastServiceCard
                  className='d-block w-100'
                  verse='Romanos 8:28'
                  title='Sermon Title'
                  fullVerse='Y sabemos que a los que aman a Dios, todas las cosas les ayudan a bien, esto es, a los que conforme a su propósito son llamados.'
                  preacher='Pastor Julio Venegas'
                  image={PastorJulio}
                />
              </div>
            </div>
          </div> */
