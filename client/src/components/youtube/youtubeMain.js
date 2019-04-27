import React from 'react'

import { YoutubePlayer } from '../youtube'
import { PastServiceCard } from '../infoCards'

import { PastorJulio } from '../../images/misc'

class Main extends React.Component {
  render() {
    return (
      <>
        <div
          className='row'
          style={{
            width: '100%',
            minHeight: '55vh',
            margin: 'auto',
            marginTop: '2vh'
          }}
        >
          <div
            className='col-sm'
            style={{
              padding: 0,
              margin: 0,
              marginBottom: '3vh',
              borderRadius: '5px'
            }}
          >
            <YoutubePlayer />
          </div>
        </div>
        <div
          className='row'
          style={{
            paddingLeft: '2vh',
            paddingBottom: '2vh'
          }}
        >
          <div id='carouselExampleIndicators' className='col-sm carousel slide carousel-fade' data-ride='carousel'>
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
          </div>
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
              Sermon Name
            </p>
            <p
              style={{
                fontSize: 20,
                color: '#b2b2b2',
                marginBottom: '1vh'
              }}
            >
              Preacher Name
            </p>
            <p
              style={{
                fontSize: 15,
                color: '#7f7f7f'
              }}
            >
              January 1, 2999
            </p>
          </div>
        </div>
      </>
    )
  }
}

export default Main
