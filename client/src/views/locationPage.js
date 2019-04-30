import React from 'react'

import { Firebase } from '../components/google'
import { ActivityCard, PastServiceCard } from '../components/infoCards'
import { Navbar } from '../components/bootstrap'
import { MapDark } from '../components/maps'

import { Bg1, Bg2, Bg3 } from '../images/backgrounds'
import {
  AxelIcon,
  MikeIcon,
  YadiIcon,
  JulioIcon,
  MariaIcon,
  SilviaIcon,
  NeftaliIcon,
  TabernaculoIcon
} from '../images/roundIcons'

const database = Firebase.database()
const dayRef = database.ref('day')
const xtrRef = database.ref('extras')

class LocationPage extends React.Component {
  state = {
    wed: '',
    fri: '',
    sun: '',
    xtr: ''
  }

  componentDidMount() {
    dayRef.on('value', snapshot => {
      console.log(snapshot.val())
      let wedRef = snapshot.val().wed
      let friRef = snapshot.val().fri
      let sunRef = snapshot.val().sun

      this.setState({
        wed: wedRef,
        fri: friRef,
        sun: sunRef
      })
    })

    xtrRef.on('value', snapshot => {
      let extrasRef = snapshot.val()

      this.setState({
        xtr: extrasRef
      })
    })
  }

  renderSwitch(param) {
    switch (param) {
      case 'Pastor Mike':
        return MikeIcon
      case 'Pastor Julio':
        return JulioIcon
      case 'Pastor Axel':
        return AxelIcon
      case 'Hermana Silvia':
        return SilviaIcon
      case 'Pastora Yadi':
        return YadiIcon
      case 'Pastor Neftali':
        return NeftaliIcon
      case 'Pastora Maria':
        return MariaIcon
      default:
        return TabernaculoIcon
    }
  }

  render() {
    const firebaseDb = this.state
    const wed = firebaseDb.wed
    const fri = firebaseDb.fri
    const sun = firebaseDb.sun
    const xtr = firebaseDb.xtr

    return (
      <>
        <div
          style={{
            color: 'black',
            fontFamily: 'Montserrat, sans-serif'
          }}
        >
          <div
            className='container-fluid'
            style={{
              backgroundColor: '#212a36',
              textAlign: 'center',
              paddingBottom: '2vh'
            }}
          >
            <Navbar />
            <div
              className='row'
              style={{
                height: '40vh'
              }}
            >
              <div
                className='col-sm'
                style={{
                  padding: 0
                }}
              >
                <MapDark
                  style={{
                    width: '100vw',
                    height: '40vh'
                  }}
                />
                <div
                  style={{
                    paddingTop: '8vh'
                  }}
                >
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
          </div>
          <div
            className='container-fluid'
            style={{
              padding: '5vh',
              paddingBottom: '8vh'
            }}
          >
            <div className='row'>
              <ActivityCard
                Size='-4'
                Icon={this.renderSwitch(wed.preacher)}
                BgImage={Bg1}
                Alt='Icon for Julio'
                Weekday={wed.day}
                Time={wed.time}
                Preacher={wed.preacher}
                WorshipGroup={wed.worshipGroup}
                Verse={wed.verse}
              />
              <ActivityCard
                Size='-4'
                Icon={this.renderSwitch(fri.preacher)}
                BgImage={Bg2}
                Alt='Icon for Mike'
                Weekday={fri.day}
                Time={fri.time}
                Preacher={fri.preacher}
                WorshipGroup={fri.worshipGroup}
                Verse={fri.verse}
              />
              <ActivityCard
                Size='-4'
                Icon={this.renderSwitch(sun.preacher)}
                BgImage={Bg3}
                Alt='Icon for Axel'
                Weekday={sun.day}
                Time={sun.time}
                Preacher={sun.preacher}
                WorshipGroup={sun.worshipGroup}
                Verse={sun.verse}
              />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LocationPage
