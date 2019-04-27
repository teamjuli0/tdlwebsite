import React from 'react'

import { Firebase } from '../components/google'
import { YoutubeMain } from '../components/youtube'
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
      let extrasRef = snapshot.val().extras

      this.setState({
        wed: wedRef,
        fri: friRef,
        sun: sunRef,
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
    const day = this.state
    const wed = day.wed
    const fri = day.fri
    const sun = day.sun

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
            <YoutubeMain />
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
