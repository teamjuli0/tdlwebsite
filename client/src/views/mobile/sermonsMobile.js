import React from 'react'

import { Firebase } from '../../components/google'
import { YoutubeMain, YoutubePlayer } from '../../components/youtube'
import { ActivityCard, PastServiceCard } from '../../components/infoCards'
import { Navbar, VerticalDivider } from '../../components/bootstrap'

import { Bg1, Bg2, Bg3 } from '../../images/backgrounds'
import {
  LosCachorrosTDL,
  JesusBuscaIntimos,
  BajoRevelacion,
  NocheDeFuego,
  LlamamientoDeGedeon
} from '../../images/youtubeVideoThumbnails'
import {
  AxelIcon,
  MikeIcon,
  YadiIcon,
  JulioIcon,
  MariaIcon,
  SilviaIcon,
  NeftaliIcon,
  TabernaculoSquare
} from '../../images/roundIcons'

const database = Firebase.database()
const dayRef = database.ref('day')
const xtrRef = database.ref('extras')

console.log(database)
console.log(dayRef)

console.log(dayRef)

class SermonsMobile extends React.Component {
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
        return TabernaculoSquare
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
            <PastServiceCard YtId='TEVYqjwd-YA' Image={LosCachorrosTDL} />
            <PastServiceCard YtId='YqiRrtBlI_A' Image={JesusBuscaIntimos} />
            <PastServiceCard YtId='CAn8sei0wxM' Image={NocheDeFuego} />
            <PastServiceCard YtId='zRSOnwkee7Y' Image={LlamamientoDeGedeon} />
          </div>
        </div>
      </>
    )
  }
}

export default SermonsMobile

/* <div id='carouselExampleIndicators' className='col-sm carousel slide carousel-fade' data-ride='carousel'>
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
          </div> */
