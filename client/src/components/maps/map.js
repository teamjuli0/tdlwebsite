import React from 'react'
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const MapContainer = props => {
  return (
    <Map
      style={props.style}
      google={props.google}
      zoom={15}
      initialCenter={{
        lat: 33.9991905,
        lng: -118.291228
      }}
    >
      <Marker onClick={props.onMarkerClick} name={'Current location'} />
    </Map>
  )
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAmvU-UfqYdMWCUmfTCEgMfB-hrCGFAMqw'
})(MapContainer)
