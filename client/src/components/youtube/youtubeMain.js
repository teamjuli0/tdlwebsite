import React from 'react'

import { YoutubePlayer } from '../youtube'

class Main extends React.Component {
  render() {
    return (
      <>
        <div
          className='row'
          style={{
            width: '100%',
            margin: 'auto',
            marginTop: '2vh'
          }}
        >
          <div className='col-sm'>
            <div
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
        </div>
        <div
          className='row'
          style={{
            paddingTop: '2vh',
            paddingBottom: '4vh'
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
