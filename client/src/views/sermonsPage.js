import React from 'react'

import { Firebase } from '../components/google'
import { YoutubeMain, YoutubePlayer } from '../components/youtube'
import { ActivityCard } from '../components/infoCards'
import { Navbar, VerticalDivider } from '../components/bootstrap'

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

console.log(database)
console.log(dayRef)

console.log(dayRef)

class Sermons extends React.Component {
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
            backgroundColor: '#191919',
            minHeight: '95vh',
            fontFamily: 'Cinzel, sans-serif'
          }}
        >
          <Navbar />
          <div className='container'>
            <div
              className='row'
              style={{
                width: '100%',
                margin: 'auto',
                marginTop: '2vh'
              }}
            >
              <div
                className='col-sm'
                style={{
                  overflow: 'hidden',
                  paddingBottom: '56.25%',
                  position: 'relative',
                  height: 0
                }}
              >
                <YoutubePlayer />
              </div>
            </div>
            <div
              className='row'
              style={{
                paddingTop: '2vh',
                paddingBottom: '4vh'
              }}
            >
              {/* <div id='carouselExampleIndicators' className='col-sm carousel slide carousel-fade' data-ride='carousel'>
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
          </div> */}
              <div
                className='col-sm'
                style={{
                  paddingTop: ' 1vh',
                  color: 'white'
                }}
              >
                <p
                  style={{
                    marginBottom: '.5vh'
                  }}
                >
                  Sermones
                </p>
                <p
                  style={{
                    fontSize: 30
                  }}
                >
                  {xtr.sermonName}
                </p>
                <p
                  style={{
                    fontSize: 20,
                    color: '#b2b2b2',
                    marginBottom: '1vh'
                  }}
                >
                  {xtr.preacher}
                </p>
                <p
                  style={{
                    fontSize: 15,
                    color: '#7f7f7f'
                  }}
                >
                  {xtr.date}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            minHeight: '37vh'
          }}
          className='container-fluid'
        >
          <div className='row'>
            <ActivityCard
              Icon={this.renderSwitch(wed.preacher)}
              BgImage={Bg1}
              Alt='Icon for Julio'
              Weekday={wed.day}
              Time={wed.time}
              Preacher={wed.preacher}
              WorshipGroup={wed.worshipGroup}
              Verse={wed.verse}
            >
              <VerticalDivider color='#cccccc' />
            </ActivityCard>
            <ActivityCard
              Icon={this.renderSwitch(fri.preacher)}
              BgImage={Bg2}
              Alt='Icon for Mike'
              Weekday={fri.day}
              Time={fri.time}
              Preacher={fri.preacher}
              WorshipGroup={fri.worshipGroup}
              Verse={fri.verse}
            />
          </div>
          <div className='row' style={{ margin: 'auto' }}>
            <ActivityCard
              Size=''
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
      </>
    )
  }
}

export default Sermons
