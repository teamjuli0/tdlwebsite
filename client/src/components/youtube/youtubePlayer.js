import React from 'react'

import { Firebase } from '../google'

const database = Firebase.database()
const dayRef = database.ref('extras')

class youtubePlayer extends React.Component {
  state = {
    xtr: ''
  }

  componentDidMount() {
    dayRef.on('value', snapshot => {
      let extrasRef = snapshot.val()

      this.setState({
        xtr: extrasRef
      })
    })
  }

  render() {
    const day = this.state
    const xtr = day.xtr

    return (
      <iframe
        style={{
          left: 0,
          top: 0,
          height: '100%',
          width: '100%',
          position: 'absolute'
        }}
        title='youtube video'
        width='560'
        height='315'
        src={'https://www.youtube.com/embed/' + xtr.videoId}
        frameborder='0'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowfullscreen
      />
    )
  }

  _onReady(event) {
    event.target.pauseVideo()
  }
}

export default youtubePlayer
