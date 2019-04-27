import React from 'react'

import { YoutubeMain, Navbar, ActivityCard, VerticalDivider, Firebase } from '../components'

import Bg1 from '../images/bg1.png'
import Bg2 from '../images/bg2.png'
import Bg3 from '../images/bg3.png'
import axelIcon from '../images/axelIcon.png'
import mikeIcon from '../images/mikeIcon.png'
import yadiIcon from '../images/yadiIcon.png'
import julioIcon from '../images/julioIcon.png'
import mariaIcon from '../images/mariaIcon.png'
import silviaIcon from '../images/silviaIcon.png'
import neftaliIcon from '../images/neftaliIcon.png'
import tabernaculoIcon from '../images/tabernaculoIcon.png'

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
        return mikeIcon
      case 'Pastor Julio':
        return julioIcon
      case 'Pastor Axel':
        return axelIcon
      case 'Hermana Silvia':
        return silviaIcon
      case 'Pastora Yadi':
        return yadiIcon
      case 'Pastor Neftali':
        return neftaliIcon
      case 'Pastora Maria':
        return mariaIcon
      default:
        return tabernaculoIcon
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
