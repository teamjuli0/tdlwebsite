import React from 'react'
import { Map, TileLayer, Marker } from 'react-leaflet'

class NewMap extends React.Component {
  state = {
    lat: 33.9995,
    lng: -118.29148,
    zoom: 18
  }

  handleOnClick = () => {
    window.location =
      'https://www.google.com/maps/place/4810+Vermont+Ave,+Los+Angeles,+CA+90037/@33.9991905,-118.2934278,17z/data=!3m1!4b1!4m5!3m4!1s0x80c2c8197af14ed5:0xa092388c698f0487!8m2!3d33.9991905!4d-118.2912391'
  }

  render() {
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        />
        <Marker position={position} onclick={this.handleOnClick}></Marker>
      </Map>
    )
  }
}

export default NewMap
