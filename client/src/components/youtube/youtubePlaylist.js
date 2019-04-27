import React from 'react'
import ytlist from 'youtube-playlist'

class Playlist extends React.Component {
  state = {
    playlistArray: []
  }

  componentDidMount() {
    const url =
      'https://www.youtube.com/playlist?list=PLrohJtLMjK1NBePUwRTiKjg7iLSH9CiHH'
    ytlist(url, ['url', 'name']).then(res => {
      console.log(res.data.playlist)

      this.setState({
        playlistArray: res.data.playlist
      })
    })
  }
  render() {
    return (
      <div>
        <ul
          className='list-group-flush text-white'
          style={{
            height: '55vh',
            overflowY: 'scroll'
          }}
        >
          {this.state.playlistArray.map((item, index) => (
            <li
              className='list-group-item'
              style={{ backgroundColor: 'black', borderColor: '#a6a6a6' }}
            >
              <p key={index}>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Playlist
