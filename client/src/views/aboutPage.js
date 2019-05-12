import React from 'react'

import { Navbar } from '../components/bootstrap'
import { AboutCard } from '../components/infoCards'
import { BeliefsCard, ValuesCard, LeadersCard } from '../components/aboutPageCards'

class AboutPage extends React.Component {
  state = {
    isEmptyState: false,
    isBeliefsState: true,
    isValuesState: false,
    isLeadersState: false
  }

  triggerBeliefs = () => {
    this.setState({
      isEmptyState: false,
      isBeliefsState: true,
      isValuesState: false,
      isLeadersState: false
    })
  }

  triggerValues = () => {
    this.setState({
      isEmptyState: false,
      isBeliefsState: false,
      isValuesState: true,
      isLeadersState: false
    })
  }

  triggerLeaders = () => {
    this.setState({
      isEmptyState: false,
      isBeliefsState: false,
      isValuesState: false,
      isLeadersState: true
    })
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
              minHeight: '60vh',
              backgroundColor: '#212a36',
              fontFamily: 'Montserrat, sans-serif'
            }}
          >
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
                marginTop: '10vh'
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
          </div>
          <div
            className='container-fluid'
            style={{
              paddingRight: '2vh',
              paddingLeft: '2vh',
              backgroundImage: 'linear-gradient(to bottom, #e5e5e5, white)'
            }}
          >
            {(this.state.isBeliefsState && <BeliefsCard />) ||
              (this.state.isLeadersState && <LeadersCard />) ||
              (this.state.isValuesState && <ValuesCard />)}
          </div>
        </div>
      </>
    )
  }
}

export default AboutPage
