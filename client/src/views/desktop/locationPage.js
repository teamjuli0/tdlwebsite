import React from 'react'

import { Firebase } from '../../components/google'
import { ActivityCard } from '../../components/infoCards'
import { Navbar } from '../../components/bootstrap'
import { MapDark } from '../../components/maps'

import { AdaSquare, AxelSquare, JulioSquare, MikeSquare, YadySquare, TabernaculoSquare } from '../../images/roundIcons'

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
      case 'Pastor Julio' || 'Pastor Julio Vanegas' || 'Pastor Julio Cesar Vanegas':
        return JulioSquare
      case 'Pastor Mike' || 'Pastor Mike Bayona' || 'Pastor Mike Bayona Lopez':
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
              <div
                style={{
                  height: '450px',
                  marginTop: '25px',
                  border: '1px solid #4b525c',
                  borderRadius: '75%'
                }}
              />
              <ActivityCard
                Icon={this.renderSwitch(fri.preacher)}
                Weekday={fri.day}
                Time={fri.time}
                Preacher={fri.preacher}
                WorshipGroup={fri.worshipGroup}
                Verse={fri.verse}
              />
              <div
                style={{
                  height: '450px',
                  marginTop: '25px',
                  border: '1px solid #4b525c',
                  borderRadius: '75%'
                }}
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
            <div className='row' style={{}}>
              <div
                style={{
                  margin: 'auto',
                  maxWidth: '1050px',
                  width: '95vw',
                  paddingTop: '25px',
                  paddingBottom: '50px'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    marginTop: '70px',
                    paddingLeft: '0px',
                    zIndex: '1'
                  }}
                >
                  <div className='col-sm' style={{}}>
                    <a
                      href='https://www.google.com/maps/place/4810+Vermont+Ave,+Los+Angeles,+CA+90037/@33.9991905,-118.2934278,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c8197af14ed5:0xa092388c698f0487!8m2!3d33.9991905!4d-118.2912391'
                      role='button'
                      class='btn btn-block'
                      style={{
                        backgroundColor: '#eeeeee',
                        color: 'black',
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
                        backgroundColor: '#eeeeee',
                        color: 'black',
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
                      class='btn btn-success btn-block'
                      style={{
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
                        marginTop: '2.25vh'
                      }}
                    >
                      1(800)555-5555
                    </button>
                  </div>
                </div>
                <MapDark
                  Style={{
                    width: '100%',
                    height: '500px',
                    border: '4px solid #c3c5c8',
                    borderRadius: '10px',
                    webkitBoxShadow: '0 0 20px #5e656e',
                    mozBoxShadow: '0 0 20px #5e656e',
                    boxShadow: '0 0 20px #5e656e'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default LocationPage
