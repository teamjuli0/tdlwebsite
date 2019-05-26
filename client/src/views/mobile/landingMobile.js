import React from 'react'
import BackgroundSlider from 'react-background-slider'

import { Navbar } from '../../components/bootstrap'
import { MapMobile } from '../../components/mobile/maps'

import { Mike, Julio, Axel, Eating, Beach } from '../../images/slideshowBackground'
import { Interlaced, GrayBg } from '../../images/backgrounds'
import { TdlIcon, TdlLogo } from '../../images/logosAndIcons'

import { DownArrow, Cross } from '../../images/logosAndIcons'

class LandingPage extends React.Component {
  state = {
    questions: [],
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

  render() {
    return (
      <div>
        <Navbar />

        <div
          style={{
            color: '#ecedee',
            textAlign: 'center'
          }}
        >
          <BackgroundSlider
            images={[Julio, Eating, Mike, Axel, Beach]}
            duration={7}
            transition={1}
            style={
              this.state.currentWidth > 767 && this.state.currentHeight > 500
                ? {
                    height: '578px'
                  }
                : {
                    width: '100vw',
                    minHeight: '1000px'
                  }
            }
          />
          <div
            style={
              this.state.currentWidth > 767 && this.state.currentHeight > 500
                ? {
                    height: '578px',
                    color: '#ecedee',
                    display: 'block',
                    textAlign: 'center',
                    backgroundSize: 'cover'
                  }
                : null
            }
          >
            <div className='container-fluid'>
              <div className='row'>
                <div
                  className={this.state.currentWidth > 767 && this.state.currentHeight > 500 ? 'col-sm' : 'col-sm-6'}
                >
                  <div className='row'>
                    <div className='col-sm'>
                      <p
                        style={
                          this.state.currentWidth > 767 && this.state.currentHeight > 500
                            ? {
                                fontSize: 20,
                                paddingTop: '120px'
                              }
                            : {
                                fontSize: '15px',
                                paddingTop: '60px'
                              }
                        }
                      >
                        CUANDO TU LE HABLAS
                      </p>
                      <p
                        style={
                          this.state.currentWidth > 767 && this.state.currentHeight > 500
                            ? {
                                fontSize: '70px',
                                paddingTop: '5px'
                              }
                            : {
                                fontSize: '40px',
                                paddingTop: '5px'
                              }
                        }
                      >
                        JESUS ESCUCHA
                      </p>
                    </div>
                  </div>
                  <div
                    className='row'
                    style={{
                      margin: 'auto',
                      maxWidth: '280px',
                      paddingTop: '30px'
                    }}
                  >
                    <a
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '120px',
                        height: '35px',
                        background: 'white',
                        borderRadius: '18px',
                        boxShadow: '0 0 5px #7f7f7f ',
                        MozBoxShadow: '0 0 5px #7f7f7f',
                        WebkitBoxShadow: '0 0 5px #7f7f7f'
                      }}
                      href='/sermones'
                    >
                      Sermones
                    </a>

                    <a
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: 'auto',
                        width: '120px',
                        height: '35px',
                        background: 'white',
                        borderRadius: '18px',
                        boxShadow: '0 0 5px #7f7f7f ',
                        MozBoxShadow: '0 0 5px #7f7f7f',
                        WebkitBoxShadow: '0 0 5px #7f7f7f'
                      }}
                      href='/visitanos'
                    >
                      Horarios
                    </a>
                  </div>
                </div>

                <div
                  className={this.state.currentWidth > 767 && this.state.currentHeight > 500 ? 'col-sm' : 'col-sm-6'}
                >
                  <div className='row'>
                    <div
                      style={{
                        display: 'flex',
                        textAlign: 'right',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100vw',
                        marginTop: '50px',
                        paddingLeft: '4vw',
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      <div
                        style={
                          this.state.currentWidth > 767 && this.state.currentHeight > 500
                            ? {
                                fontSize: '20px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                paddingBottom: '10px'
                              }
                            : {
                                fontSize: '15px',
                                fontWeight: 'bold',
                                letterSpacing: '1px',
                                paddingBottom: '10px'
                              }
                        }
                      >
                        <p>Esforzaos todos vosotros los que</p>
                        <p>Esperáis en Jehová, Y tome</p>
                        <p>Aliento vuestro corazón</p>
                        <p
                          style={{
                            color: '#d2d4d6',
                            fontSize: '13px',
                            marginTop: '7px'
                          }}
                        >
                          |RVR1960|Salmos 31:24
                        </p>
                      </div>
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
        </div>
        <div
          className='container-fluid'
          style={{
            minHeight: '330px',
            paddingTop: '40px',
            paddingBottom: '40px',
            backgroundImage: `url('${Interlaced}')`,
            backgroundRepeat: 'repeat'
          }}
        >
          <div className='row'>
            <div
              className='col-sm'
              style={{
                padding: 0,
                width: '90vw',
                maxWidth: '600px',
                height: '375px',
                margin: 'auto',
                overflow: 'hidden',
                borderRadius: '5px 5px 0 0',
                boxShadow: '0 0 15px #797f86',
                MozBoxShadow: '0 0 15px #797f86',
                WebkitBoxShadow: '0 0 15px #797f86',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <MapMobile
                Style={{
                  height: '450px',
                  width: '90vw'
                }}
              />
            </div>
          </div>
          <div className='row'>
            <div
              className='col-sm'
              style={{
                background: '#f3f4f4',
                width: '90vw',
                maxWidth: '600px',
                height: '95px',
                margin: 'auto',
                borderRadius: '0 0 5px 5px',
                boxShadow: '0 0 15px #797f86',
                MozBoxShadow: '0 0 15px #797f86',
                WebkitBoxShadow: '0 0 15px #797f86',
                padding: '15px'
              }}
            >
              <div
                className='row'
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '40px',
                  width: '120px',
                  fontSize: '20px',
                  marginTop: '-35px',
                  marginLeft: '-5px',
                  marginBottom: '15px',
                  borderRadius: '5px',
                  border: '2px solid #dfa4a4',
                  boxShadow: '0 0 5px black',
                  MozBoxShadow: '0 0 5px black',
                  WebkitBoxShadow: '0 0 5px black',
                  fontFamily: 'Fira Sans, sans-serif',
                  background: 'linear-gradient(to bottom left, #bf4949, #5f2424'
                }}
              >
                <a
                  style={{
                    color: 'white'
                  }}
                  href='https://www.google.com/maps/place/4810+Vermont+Ave,+Los+Angeles,+CA+90037/@33.9991905,-118.2934278,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c8197af14ed5:0xa092388c698f0487!8m2!3d33.9991905!4d-118.2912391'
                >
                  Direciones
                </a>
              </div>
              <div className='row'>
                <div className='col-sm'>
                  <p
                    style={{
                      fontSize: '15px',
                      fontWeight: 'bolder',
                      fontFamily: 'Cinzel, sans-serif'
                    }}
                  >
                    Tabernaculo Cristiano
                  </p>
                  <p
                    style={{
                      fontSize: '30px',
                      fontWeight: 'bolder',
                      fontFamily: 'Cinzel, sans-serif'
                    }}
                  >
                    De Liberacion
                  </p>
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      right: '0',
                      marginTop: '-55px',
                      marginRight: '10px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '70px',
                      width: '70px',
                      borderRadius: '50%',
                      border: '2px solid #dfa4a4',
                      background: 'linear-gradient(to top right, #bf4949, #5f2424',
                      boxShadow: '0 0 5px black',
                      MozBoxShadow: '0 0 5px black',
                      WebkitBoxShadow: '0 0 5px black'
                    }}
                  >
                    <img
                      src={Cross}
                      alt=''
                      style={{
                        height: '50px'
                        // marginTop: '-50px',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage
