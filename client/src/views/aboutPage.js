import React from 'react'

import { Navbar } from '../components/bootstrap'
import { AboutCard } from '../components/infoCards'
import { BeliefsCard, ValuesCard, LeadersCard } from '../components/aboutPageCards'

import { DownArrow } from '../images/logosAndIcons'

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
