import React from 'react'

import { Firebase } from '../components/google'
import { YoutubePlayer } from '../components/youtube'
import { PastServiceCard } from '../components/infoCards'
import { Navbar } from '../components/bootstrap'

import {
  FirmesEnMedioDeLaMaldad,
  ElPetalo,
  LlamamientoDeGedeon,
  UnSoloCuerpo
} from '../images/youtubeVideoThumbnails'
import {
  AxelIcon,
  MikeIcon,
  YadiIcon,
  JulioIcon,
  MariaIcon,
  SilviaIcon,
  NeftaliIcon,
  TabernaculoSquare
} from '../images/roundIcons'

const database = Firebase.database()
const dayRef = database.ref('day')
const xtrRef = database.ref('extras')

class Sermons extends React.Component {
  state = {
    wed: '',
    fri: '',
    sun: '',
    xtr: ''
  }

  componentDidMount() {
    dayRef.on('value', snapshot => {
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
        return TabernaculoSquare
    }
  }

  render() {
    const firebaseDb = this.state
    const xtr = firebaseDb.xtr

    return (
      <>
        <div
          style={{
            backgroundColor: '#1e1e1e',
            paddingBottom: '4vh',
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
                paddingTop: '2vh'
              }}
            >
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
            <div className='row' />
          </div>
        </div>
        <div
          style={{
            backgroundColor: '#f9f9f9',
            padding: '5vh',
            paddingBottom: '3vh'
          }}
          className='container-fluid'
        >
          <div className='row'>
            <PastServiceCard
              YtId='rJX0l2DCz5A'
              Image={FirmesEnMedioDeLaMaldad}
            />
            <PastServiceCard YtId='Jx9spiHZXMY' Image={ElPetalo} />
            <PastServiceCard YtId='FrYma3CccDw' Image={UnSoloCuerpo} />
            <PastServiceCard YtId='zRSOnwkee7Y' Image={LlamamientoDeGedeon} />
          </div>
        </div>
      </>
    )
  }
}

export default Sermons
