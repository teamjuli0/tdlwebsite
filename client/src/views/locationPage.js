import React from 'react'
import MediaQuery from 'react-responsive'

import { Firebase } from '../components/google'
import { ActivityCard } from '../components/infoCards'
import { Navbar } from '../components/bootstrap'
import { NewMap } from '../components/maps'

import {
  AdaSquare,
  AxelSquare,
  JulioSquare,
  MikeSquare,
  YadySquare,
  TabernaculoSquare
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

  myMapContainer = React.createRef()

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
      case 'Pastora Ada':
        return AdaSquare
      case 'Pastor Axel':
        return AxelSquare
      case 'Pastor Julio' ||
        'Pastor Julio Vanegas' ||
        'Pastor Julio Cesar Vanegas':
        return JulioSquare
      case 'Hermano Mike' ||
        'Hermano Mike Bayona' ||
        'Hermano Mike Bayona Lopez':
        return MikeSquare
      case 'Pastora Yady' || 'Pastora Yady Bayona':
        return YadySquare
      case 'Pastor Neftali':
      default:
        return TabernaculoSquare
    }
  }

  render() {
    const firebaseDb = this.state
    const wed = firebaseDb.wed
    const fri = firebaseDb.fri
    const sun = firebaseDb.sun

    return (
      <>
        <div
          style={{
            backgroundColor: '#212a36'
          }}
        >
          <Navbar
          //height = 7vh
          />
          <div className='container-fluid'>
            <MediaQuery minDeviceWidth={768}>
              <div
                className='row'
                style={{
                  maxWidth: '900px',
                  paddingTop: '20px',
                  margin: 'auto'
                }}
              >
                <ActivityCard
                  Icon={this.renderSwitch(wed.preacher)}
                  Weekday={wed.day}
                  Time={wed.time}
                  Preacher={wed.preacher}
                  WorshipGroup={wed.worshipGroup}
                  Verse={wed.verse}
                />
                <ActivityCard
                  Icon={this.renderSwitch(fri.preacher)}
                  Weekday={fri.day}
                  Time={fri.time}
                  Preacher={fri.preacher}
                  WorshipGroup={fri.worshipGroup}
                  Verse={fri.verse}
                />
                <ActivityCard
                  Icon={this.renderSwitch(sun.preacher)}
                  Weekday={sun.day}
                  Time={sun.time}
                  Preacher={sun.preacher}
                  WorshipGroup={sun.worshipGroup}
                  Verse={sun.verse}
                />
              </div>
            </MediaQuery>
            <div className='row'>
              <div
                style={{
                  margin: 'auto',
                  maxWidth: '900px',
                  width: '95vw',
                  paddingTop: '25px',
                  paddingBottom: '50px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    marginTop: '-3px',
                    paddingLeft: '35px',
                    zIndex: '1'
                  }}
                >
                  <div className='col-sm'>
                    <a
                      href='https://www.google.com/maps/place/4810+Vermont+Ave,+Los+Angeles,+CA+90037/@33.9991905,-118.2934278,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c8197af14ed5:0xa092388c698f0487!8m2!3d33.9991905!4d-118.2912391'
                      role='button'
                      class='btn btn-block'
                      style={{
                        border: '2px solid #8e8e8e',
                        backgroundColor: '#2e333a',
                        color: '#eeeeee',
                        marginTop: '2.25vh'
                      }}
                    >
                      Direciones
                    </a>
                  </div>
                  <div className='col-sm'>
                    <a
                      href='/sermones'
                      role='button'
                      class='btn btn-block'
                      style={{
                        border: '2px solid #8e8e8e',
                        backgroundColor: '#2e333a',
                        color: '#eeeeee',
                        marginTop: '2.25vh'
                      }}
                    >
                      Sermones
                    </a>
                  </div>
                  <div className='col-sm'>
                    <a
                      href='/nosotros'
                      role='button'
                      class='btn btn-block'
                      style={{
                        border: '2px solid #c4d3e2',
                        backgroundColor: '#3c6ea0',
                        color: '#eeeeee',
                        marginTop: '2.25vh'
                      }}
                    >
                      Sobre Nosotros
                    </a>
                  </div>
                  <div className='col-sm'>
                    <button
                      type='button'
                      class='btn btn-danger btn-block'
                      style={{
                        border: '2px solid #dfa4a4',
                        backgroundColor: '#ab4141',
                        color: '#eeeeee',
                        marginTop: '2.25vh'
                      }}
                    >
                      1(800)555-5555
                    </button>
                  </div>
                </div>
                <div
                  style={{
                    height: '500px',
                    border: '4px solid #465666',
                    borderRadius: '5px',
                    webkitBoxShadow: '0 0 5px black',
                    mozBoxShadow: '0 0 5px black',
                    boxShadow: '0 0 5px black',
                    position: 'relative',
                    zIndex: '0'
                  }}
                >
                  <NewMap />>
                </div>
              </div>
            </div>
            <MediaQuery maxDeviceWidth={767}>
              <div
                className='row'
                style={{
                  maxWidth: '1050px',
                  paddingBottom: '50px',
                  margin: 'auto'
                }}
              >
                <ActivityCard
                  Icon={this.renderSwitch(wed.preacher)}
                  Weekday={wed.day}
                  Time={wed.time}
                  Preacher={wed.preacher}
                  WorshipGroup={wed.worshipGroup}
                  Verse={wed.verse}
                />
                <ActivityCard
                  Icon={this.renderSwitch(fri.preacher)}
                  Weekday={fri.day}
                  Time={fri.time}
                  Preacher={fri.preacher}
                  WorshipGroup={fri.worshipGroup}
                  Verse={fri.verse}
                />
                <ActivityCard
                  Icon={this.renderSwitch(sun.preacher)}
                  Weekday={sun.day}
                  Time={sun.time}
                  Preacher={sun.preacher}
                  WorshipGroup={sun.worshipGroup}
                  Verse={sun.verse}
                />
              </div>
            </MediaQuery>
          </div>
        </div>
      </>
    )
  }
}

export default LocationPage
