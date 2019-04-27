import React from 'react'
import YouTube from 'react-youtube'
import firebase from '../components/firebase'

const database = firebase.database()
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

    const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 0
      }
    }

    return <YouTube videoId={xtr.videoId} opts={opts} onReady={this._onReady} />
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo()
  }
}

export default youtubePlayer
